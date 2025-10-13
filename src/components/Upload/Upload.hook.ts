import { useMutation, useQuery } from '@apollo/client/react';
import { useListState } from '@mantine/hooks';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ListMediaFilesDocument, MediaFile, MediaStore, UploadFileDocument } from 'src/graphql';
import { UAParser } from 'ua-parser-js';

import { FileItem } from './Upload.interface';

export interface UploadOptions {
  onError?: (error: Error, item: FileItem, index: number) => void;
  onDone?: (item: FileItem, index: number) => void;
  value?: Array<string> | Array<MediaFile>;
  defaultValue?: Array<string> | Array<MediaFile>;
  path?: string;
  store?: MediaStore;
}

export function useUpload({ onError, onDone, value, defaultValue, path }: UploadOptions) {
  const [fileItems, handleFileItems] = useListState<FileItem>();
  const [uploadFile] = useMutation(UploadFileDocument);
  const [initializedRef, setInitializedRef] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const { t } = useTranslation();

  let ids: Array<string> = [];
  const valueItems = value || defaultValue || [];
  if (valueItems.length > 0 && typeof valueItems[0] === 'object') {
    ids = (valueItems as Array<MediaFile>).map((item) => item.id);
  } else if (valueItems.length > 0 && typeof valueItems[0] === 'string') {
    ids = valueItems as Array<string>;
  }
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
    const initialValue = value || defaultValue;

    if (initialValue && initialValue.length > 0) {
      // 处理已有的MediaFile对象
      if (initialValue.length > 0 && typeof initialValue[0] === 'object') {
        const mediaFiles = initialValue as MediaFile[];
        mediaFiles.forEach((mediaFile) => {
          initialItems.push({
            file: new File([], mediaFile.fileName),
            progress: 100,
            status: 'done',
            id: mediaFile.id,
            url: mediaFile.url,
            info: mediaFile,
          });
        });
      }

      // 处理从API获取的MediaFile数据
      if (mediaFilesData?.listMediaFiles) {
        const items = mediaFilesData.listMediaFiles as MediaFile[];
        items.forEach((mediaFile) => {
          // 检查是否已经添加过该文件
          if (!initialItems.some((item) => item.id === mediaFile.id)) {
            initialItems.push({
              file: new File([], mediaFile.fileName),
              progress: 100,
              status: 'done',
              id: mediaFile.id,
              url: mediaFile.url,
              info: mediaFile,
            });
          }
        });
      }

      if (initialItems.length > 0) {
        handleFileItems.setState(initialItems);
        setInitializedRef(true);
      }
    }

    setLoading(false);
  }, [value, defaultValue, mediaFilesData, handleFileItems, initializedRef]);

  // 处理待上传的文件
  useEffect(() => {
    const pendingItems: FileItem[] = [];
    const itemsIndex: Record<string, number> = {};
    fileItems.forEach((item, index) => {
      itemsIndex[item.id] = index;
      if (item.status === 'pending') {
        pendingItems.push(item);
      }
    });

    const runUpload = async (item: FileItem, index: number) => {
      item.status = 'progress';
      handleFileItems.setItem(index, item);
      try {
        const { data } = await uploadFile({
          variables: {
            file: item.file,
            folderPath: path || '',
          },
        });
        if (!data?.uploadFile) {
          throw new Error(t('common:upload.error.upload'));
        }
        item.progress = 100;
        item.status = 'done';
        item.info = data.uploadFile;
        handleFileItems.setItem(index, item);
        if (onDone) {
          onDone(item, index);
        }
      } catch (err: any) {
        const error = JSON.parse(err.message);
        item.status = 'failed';
        item.error = error?.message || String(error);
        handleFileItems.setItem(index, item);
        if (onError) {
          onError(error as Error, item, index);
        }
      }
    };

    pendingItems.forEach((item) => {
      const index = itemsIndex[item.id];
      runUpload(item, index);
    });
  }, [fileItems, uploadFile, path, t, onDone, onError, handleFileItems]);

  return { fileItems, handleFileItems, loading: loading || fetching };
}

export function useFileManagerName() {
  const ua = new UAParser();
  const os = ua.getOS();
  const name = os.name?.toLowerCase();
  if (name?.includes('win')) {
    return 'Explorer'; // Windows 系统
  } else if (name?.includes('mac')) {
    return 'Finder'; // macOS 系统
  }
  return 'File Manager'; // 其他系统
}
