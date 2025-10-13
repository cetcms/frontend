import { useMutation, useQuery } from '@apollo/client/react';
import { useListState } from '@mantine/hooks';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ListMediaFilesDocument, MediaFile, MediaStore, UploadFileDocument } from 'src/graphql';
import { UAParser } from 'ua-parser-js';

import { FileItem, UploadValueType } from './Upload.interface';

export interface UploadOptions {
  onError?: (error: Error, item: FileItem, index: number) => void;
  onDone?: (item: FileItem, index: number) => void;
  value?: UploadValueType;
  defaultValue?: UploadValueType;
  path?: string;
  store?: MediaStore;
  maxFiles?: number;
}

export function useUpload({ onError, onDone, value, defaultValue, path, maxFiles }: UploadOptions) {
  const [fileItems, handleFileItems] = useListState<FileItem>();
  const [uploadFile] = useMutation(UploadFileDocument);
  const [initializedRef, setInitializedRef] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { t } = useTranslation(['components']);

  // 保持对最新 fileItems 的引用，用于在上传过程中按id定位当前索引，避免错位更新
  const itemsRef = React.useRef<FileItem[]>([]);
  useEffect(() => {
    itemsRef.current = fileItems;
  }, [fileItems]);

  // 统一将输入值规范化为 ID 列表，支持 string、string[]、MediaFile、MediaFile[]
  const normalizeToIdList = (input?: UploadValueType): string[] => {
    if (!input) return [];
    if (typeof input === 'string') return input ? [input] : [];
    if (Array.isArray(input)) {
      if (input.length === 0) return [];
      const first = input[0];
      if (typeof first === 'object' && first) {
        return (input as MediaFile[]).map((it) => it.id).filter((id): id is string => Boolean(id));
      }
      return (input as string[]).filter((id): id is string => Boolean(id));
    }
    // 单个 MediaFile
    if (typeof input === 'object' && input) {
      return input.id ? [input.id] : [];
    }
    return [];
  };

  const singleMode = !maxFiles || maxFiles <= 1;
  const idsRaw: string[] = normalizeToIdList(value ?? defaultValue);
  const ids: string[] = singleMode ? idsRaw.slice(0, 1) : idsRaw;
  // 查询用于获取MediaFile数据的hook
  const { data: mediaFilesData, loading: fetching } = useQuery(ListMediaFilesDocument, {
    skip: !ids.length,
    variables: {
      fileIds: ids,
    },
  });
  // 初始化文件列表
  useEffect(() => {
    if (initializedRef) {
      setLoading(false);
      return;
    }

    const initialItems: FileItem[] = [];
    const initialValue = value ?? defaultValue;

    // 若传入的是 MediaFile 或 MediaFile[]，直接使用它们初始化
    if (Array.isArray(initialValue) && initialValue.length > 0 && typeof initialValue[0] === 'object') {
      const mediaFiles = singleMode ? (initialValue as MediaFile[]).slice(0, 1) : (initialValue as MediaFile[]);
      for (const mediaFile of mediaFiles) {
        initialItems.push({
          file: new File([], mediaFile.fileName),
          progress: 100,
          status: 'done',
          id: mediaFile.id,
          url: mediaFile.url,
          info: mediaFile,
        });
      }
    } else if (initialValue && typeof initialValue === 'object') {
      const mediaFile = initialValue as MediaFile;
      initialItems.push({
        file: new File([], mediaFile.fileName),
        progress: 100,
        status: 'done',
        id: mediaFile.id,
        url: mediaFile.url,
        info: mediaFile,
      });
    }

    // 合并从 API 获取的 MediaFile 数据
    if (mediaFilesData?.listMediaFiles) {
      const seen = new Set(initialItems.map((it) => it.id));
      const items = mediaFilesData.listMediaFiles as MediaFile[];
      for (const mediaFile of items) {
        if (singleMode && initialItems.length >= 1) break;
        if (!seen.has(mediaFile.id)) {
          initialItems.push({
            file: new File([], mediaFile.fileName),
            progress: 100,
            status: 'done',
            id: mediaFile.id,
            url: mediaFile.url,
            info: mediaFile,
          });
          if (mediaFile.id) {
            seen.add(mediaFile.id);
          }
        }
      }
    }

    if (initialItems.length > 0) {
      handleFileItems.setState(initialItems);
      setInitializedRef(true);
    }

    setLoading(false);
  }, [value, defaultValue, mediaFilesData, handleFileItems, initializedRef, singleMode]);

  // 简单并发限制，防止一次性过多上传导致不稳定
  const MAX_CONCURRENCY = 3;
  const activeCountRef = React.useRef(0);

  // 处理待上传的文件
  useEffect(() => {
    const pendingItems: FileItem[] = [];
    fileItems.forEach((item) => {
      if (item.status === 'pending') {
        pendingItems.push(item);
      }
    });

    const setById = (updatedItem: FileItem) => {
      const idx = itemsRef.current.findIndex((it) => it.id === updatedItem.id);
      if (idx !== -1) {
        handleFileItems.setItem(idx, updatedItem);
      }
    };

    const runUpload = async (item: FileItem) => {
      // 在开始前再次确认索引位置
      const startIdx = itemsRef.current.findIndex((it) => it.id === item.id);
      if (startIdx === -1) return;
      const starting: FileItem = { ...item, status: 'progress' };
      handleFileItems.setItem(startIdx, starting);
      activeCountRef.current++;

      try {
        const { data } = await uploadFile({
          variables: {
            file: item.file,
            folderPath: path || '',
          },
        });
        if (!data?.uploadFile) {
          throw new Error(t('upload.error.upload'));
        }

        // 成功后：更新远程URL，同时回收本地ObjectURL以降低内存占用
        const prevUrl = starting.url;
        if (prevUrl && prevUrl.startsWith('blob:')) {
          try {
            URL.revokeObjectURL(prevUrl);
          } catch {
            // noop
          }
        }

        // 安全获取上传后的文件信息与远程URL
        const uploadedInfo = data.uploadFile as unknown as MediaFile;
        const remoteUrl = uploadedInfo?.url ?? starting.url;

        const doneItem: FileItem = {
          ...starting,
          progress: 100,
          status: 'done',
          url: remoteUrl,
          info: uploadedInfo,
        };

        setById(doneItem);
        if (onDone) {
          onDone(doneItem, startIdx);
        }
      } catch (error) {
        const failed: FileItem = { ...item, status: 'failed', error: (error as Error).message };
        setById(failed);
        if (onError) {
          onError(error as Error, item, startIdx);
        }
      } finally {
        activeCountRef.current = Math.max(0, activeCountRef.current - 1);
      }
    };

    // 启动上传：受并发限制
    pendingItems.forEach((item) => {
      if (activeCountRef.current >= MAX_CONCURRENCY) return;
      runUpload(item);
    });
  }, [fileItems, uploadFile, path, t, onDone, onError, handleFileItems]);

  return { fileItems, handleFileItems, loading: loading || fetching };
}

export function useFileManagerName() {
  const ua = new UAParser();
  const os = ua.getOS();
  const name = os.name?.toLowerCase();
  const { t } = useTranslation(['components']);
  if (name?.includes('win')) {
    return t('upload.fileManager.explorer');
  } else if (name?.includes('mac')) {
    return t('upload.fileManager.finder');
  }
  return t('upload.fileManager.file_manager');
}
