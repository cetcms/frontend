import { Center, Loader, InputWrapper, InputWrapperProps, rem } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { List } from 'react-movable';
import { MediaFileFragment, MediaStore, MediaType } from 'src/graphql';
import { FileHelper } from 'src/utils/file-helper';
import * as uuid from 'uuid';

import { Dropzone } from './Dropzone';
import { PreviewItem } from './PreviewItem';
import { useUpload } from './Upload.hook';
import { FileItem, UploadValueType } from './Upload.interface';
import classes from './Upload.module.scss';

const fileHelper = new FileHelper();

export type UploadProps = Omit<InputWrapperProps, 'children'> & {
  maxSize?: number;
  maxFiles?: number;
  value?: UploadValueType;
  defaultValue?: UploadValueType;
  onChange?: (value: UploadValueType) => void;
  outputType?: 'id' | 'object';
  allowType?: MediaType[];
  path?: string;
  store?: MediaStore;
  disabled?: boolean;
};

export const Upload: React.FC<UploadProps> = (props) => {
  const { t } = useTranslation(['components']);
  const {
    maxSize,
    maxFiles,
    allowType,
    path,
    store,
    value,
    defaultValue,
    onChange,
    outputType = 'id',
    disabled = false,
    ...inputWrapperProps
  } = props;
  const { fileItems, handleFileItems, loading } = useUpload({
    onError: (_error, item) => {
      notifications.show({
        color: 'red',
        title: t('upload.notification.failed'),
        message: item.info.fileName,
        position: 'top-right',
        icon: <IconX style={{ width: rem(18), height: rem(18) }} />,
      });
    },
    onDone: (item) => {
      notifications.show({
        color: 'teal',
        title: t('upload.notification.success'),
        message: item.info.fileName,
        position: 'top-right',
        icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
      });
    },
    value,
    defaultValue,
    path,
    store,
    maxFiles,
  });

  const inferOutputType = (): 'id' | 'object' => {
    const input = value ?? defaultValue;
    if (!input) return 'id';
    if (Array.isArray(input)) {
      return input.length > 0 && typeof input[0] === 'object' ? 'object' : 'id';
    }
    return typeof input === 'object' ? 'object' : 'id';
  };
  const effectiveOutputType: 'id' | 'object' = outputType ?? inferOutputType();

  // Keep latest onChange in a ref to avoid dependency loop
  const onChangeRef = React.useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // Unified output handling for single/multiple and object/id modes
  useEffect(() => {
    if (loading) return;

    const doneItems = fileItems.filter((item) => item.status === 'done');
    const isSingle = !maxFiles || maxFiles <= 1;

    let nextValue: UploadValueType = null;
    if (effectiveOutputType === 'object') {
      if (isSingle) {
        nextValue = (doneItems[0]?.info as MediaFileFragment) || null;
      } else {
        nextValue = doneItems.map((item) => item.info as MediaFileFragment) as Array<MediaFileFragment>;
      }
    } else if (isSingle) {
      const id = doneItems[0]?.info?.id ?? null;
      nextValue = id;
    } else {
      nextValue = doneItems.map((item) => item.info.id).filter(Boolean) as string[];
    }

    // Prevent infinite loop: only emit when value actually changed
    const equals = (a: UploadValueType, b: UploadValueType): boolean => {
      if (a === b) return true;
      // Treat empty string and null as equal for single id mode
      if ((a === '' && b === null) || (a === null && b === '')) return true;
      if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) return false;
        const aSorted = [...a].map((v) => (typeof v === 'object' ? (v as MediaFileFragment).id : v)).sort();
        const bSorted = [...b].map((v) => (typeof v === 'object' ? (v as MediaFileFragment).id : v)).sort();
        return aSorted.every((v, i) => v === bSorted[i]);
      }
      if (typeof a === 'object' && a && typeof b === 'object' && b) {
        return (a as MediaFileFragment).id === (b as MediaFileFragment).id;
      }
      if (typeof a === 'object' && a && (typeof b === 'string' || b === null)) {
        return (a as MediaFileFragment).id === b;
      }
      if (typeof b === 'object' && b && (typeof a === 'string' || a === null)) {
        return (b as MediaFileFragment).id === a;
      }
      return false;
    };

    if (!equals(value ?? null, nextValue) && onChangeRef.current) {
      onChangeRef.current(nextValue);
    }
  }, [fileItems, loading, maxFiles, effectiveOutputType, value]);

  const multiple = maxFiles ? maxFiles > 1 : false;
  const showDropzone =
    Boolean(multiple && maxFiles && fileItems.length < maxFiles) || Boolean(!multiple && fileItems.length < 1);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <InputWrapper {...inputWrapperProps}>
      <>
        {showDropzone && (
          <Dropzone
            disabled={disabled}
            multiple={multiple}
            maxSize={maxSize}
            allowType={allowType}
            onDrop={(files) => {
              if (disabled) return;
              const allowedFiles: File[] = [];
              const rejectedFiles: File[] = [];
              for (const file of files) {
                if (fileHelper.isFileAllowed(file, allowType)) {
                  allowedFiles.push(file);
                } else {
                  rejectedFiles.push(file);
                }
              }

              if (rejectedFiles.length > 0) {
                rejectedFiles.forEach((file) => {
                  notifications.show({
                    title: `${file.name}`,
                    message: t('upload.dropzone.invalid_type'),
                    position: 'top-right',
                  });
                });
              }

              const items: FileItem[] = [];
              for (const file of allowedFiles) {
                const url = URL.createObjectURL(file);
                items.push({
                  file,
                  url,
                  progress: 0,
                  status: 'pending',
                  error: undefined,
                  id: uuid.v4(),
                  info: {
                    url,
                    store: store || MediaStore.Local,
                    fileName: file.name,
                    fileSize: String(file.size),
                    mimeType: file.type,
                    extension: file.name.split('.').pop() || '',
                    mediaType: fileHelper.getMediaType(file.type),
                  },
                });
              }

              let next = [...items, ...fileItems];
              if (maxFiles && next.length > maxFiles) {
                next = next.slice(0, maxFiles);
                notifications.show({
                  title: t('upload.notification.limit'),
                  message: t('upload.notification.limit_tip', { maxFiles }),
                  position: 'top-right',
                });
              }
              handleFileItems.setState(next);
            }}
          />
        )}
        <List
          values={fileItems}
          onChange={
            disabled ? () => {} : ({ oldIndex, newIndex }) => handleFileItems.reorder({ from: oldIndex, to: newIndex })
          }
          renderList={({ children, props }) => (
            <div {...props} className={classes.listWrapper}>
              {children}
            </div>
          )}
          renderItem={({ value, props, index }) => (
            <div {...props} key={props.key} className={classes.listItem}>
              <PreviewItem
                disabled={disabled}
                item={value}
                index={index || 0}
                onRemove={(idx) => {
                  if (disabled) return;
                  const item = fileItems[idx];
                  if (item?.url && item.url.startsWith('blob:')) {
                    try {
                      URL.revokeObjectURL(item.url);
                    } catch {
                      // noop
                    }
                  }
                  handleFileItems.remove(idx);
                }}
                onRetry={(idx) => {
                  if (disabled) return;
                  handleFileItems.setItem(idx, {
                    ...value,
                    status: 'pending',
                    progress: 0,
                    error: undefined,
                  });
                }}
              />
            </div>
          )}
        />
      </>
    </InputWrapper>
  );
};
