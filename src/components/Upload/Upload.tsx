import { Center, Loader, rem } from '@mantine/core';
import { DropzoneProps } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconCheck, IconX } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { List } from 'react-movable';
import { MediaFile, MediaStore } from 'src/graphql';
import { FileHelper } from 'src/utils/file-helper';
import * as uuid from 'uuid';

import { Dropzone } from './Dropzone';
import { PreviewItem } from './PreviewItem';
import { useUpload } from './Upload.hook';
import { FileItem } from './Upload.interface';
import classes from './Upload.module.scss';

const fileHelper = new FileHelper();

export interface UploadProps {
  maxSize?: number;
  maxFiles?: number;
  accept?: DropzoneProps['accept'];
  path?: string;
  store?: MediaStore;
  value?: Array<string> | Array<MediaFile>;
  defaultValue?: Array<string> | Array<MediaFile>;
  onChange?: (value: Array<FileItem>) => void;
}

export const Upload: React.FC<UploadProps> = (props) => {
  const { t } = useTranslation(['components']);
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
    value: props.value,
    defaultValue: props.defaultValue,
    path: props.path,
    store: props.store,
  });

  useEffect(() => {
    if (!loading) {
      props.onChange?.(fileItems.filter((item) => item.status === 'done'));
    }
  }, [fileItems, loading]);

  const multiple = props.maxFiles ? props.maxFiles > 1 : false;
  const showDropzone =
    Boolean(multiple && props.maxFiles && fileItems.length < props.maxFiles) ||
    Boolean(!multiple && fileItems.length < 1);

  if (loading) {
    return (
      <Center>
        <Loader />
      </Center>
    );
  }

  return (
    <>
      {showDropzone && (
        <Dropzone
          multiple={multiple}
          maxSize={props.maxSize}
          accept={props.accept}
          onDrop={async (files) => {
            const items: FileItem[] = [];
            for (const file of files) {
              const url = await fileHelper.toBase64Url(file);
              items.push({
                file,
                url,
                progress: 0,
                status: 'pending',
                error: undefined,
                id: uuid.v4(),
                info: {
                  url,
                  store: props.store || MediaStore.Local,
                  fileName: file.name,
                  fileSize: String(file.size),
                  mimeType: file.type,
                  extension: file.name.split('.').pop() || '',
                  mediaType: fileHelper.getMediaType(file.type),
                },
              });
            }

            const allItems = [...items.reverse(), ...fileItems].reverse();
            if (props.maxFiles && allItems.length > props.maxFiles) {
              handleFileItems.setState(allItems.slice(0, props.maxFiles).reverse());
              notifications.show({
                title: t('upload.notification.limit'),
                message: t('upload.notification.limit_tip', { maxFiles: props.maxFiles }),
                position: 'top-right',
              });
            } else {
              handleFileItems.setState(allItems.reverse());
            }
          }}
        />
      )}
      <List
        values={fileItems}
        onChange={({ oldIndex, newIndex }) => handleFileItems.reorder({ from: oldIndex, to: newIndex })}
        renderList={({ children, props }) => (
          <div {...props} className={classes.listWrapper}>
            {children}
          </div>
        )}
        renderItem={({ value, props, index }) => (
          <div {...props} key={props.key} className={classes.listItem}>
            <PreviewItem
              item={value}
              index={index || 0}
              onRemove={(index) => handleFileItems.remove(index)}
              onRetry={(index) => {
                handleFileItems.setItem(index, {
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
  );
};
