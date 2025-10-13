import { Box, Button, Group, rem, Text, useMantineTheme } from '@mantine/core';
import { DropzoneProps, Dropzone as MantineDropzone } from '@mantine/dropzone';
import { notifications } from '@mantine/notifications';
import { IconCloudUpload, IconDownload, IconX } from '@tabler/icons-react';
import { filesize } from 'filesize';
import React, { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { MediaType } from 'src/graphql';
import { FileHelper } from 'src/utils/file-helper';
import { Logger } from 'src/utils/logger';

import { useFileManagerName } from './Upload.hook';
import classes from './Upload.module.scss';

const logger = new Logger('Dropzone');
const fileHelper = new FileHelper();

export const Dropzone: React.FC<DropzoneProps & { allowType?: MediaType[] }> = (props) => {
  const theme = useMantineTheme();
  const fileManagerName = useFileManagerName();
  const { t } = useTranslation(['components']);
  const openRef = useRef<() => void>(null);
  const accept = props.accept ?? fileHelper.getAcceptMimeTypesFor(props.allowType);
  return (
    <div className={classes.wrapper}>
      <MantineDropzone
        radius="md"
        className={classes.dropzone}
        {...props}
        accept={accept}
        onReject={(files) => {
          files.forEach((file) => {
            const error = file.errors[0];
            let message = error?.message || '';
            if (error?.code === 'file-too-large' && props.maxSize) {
              message = t('upload.dropzone.too_large', { maxSize: filesize(props.maxSize) });
            } else if (error?.code === 'file-invalid-type') {
              message = t('upload.dropzone.invalid_type');
            } else if (error?.code === 'too-many-files') {
              message = t('upload.dropzone.too_many_files');
            }

            logger.error(message || error?.message);

            notifications.show({
              title: `${file.file.name}`,
              message: message || error?.message,
              position: 'top-right',
            });
          });
        }}
        openRef={openRef}
      >
        <div style={{ pointerEvents: 'none' }}>
          <Group justify="center">
            <MantineDropzone.Accept>
              <IconDownload style={{ width: rem(50), height: rem(50) }} color={theme.colors.blue[6]} stroke={1.5} />
            </MantineDropzone.Accept>
            <MantineDropzone.Reject>
              <IconX style={{ width: rem(50), height: rem(50) }} color={theme.colors.red[6]} stroke={1.5} />
            </MantineDropzone.Reject>
            <MantineDropzone.Idle>
              <IconCloudUpload style={{ width: rem(50), height: rem(50) }} stroke={1.5} />
            </MantineDropzone.Idle>
          </Group>

          <Text ta="center" fw={700} fz="md" component="div">
            <MantineDropzone.Accept>{t('upload.dropzone.accept')}</MantineDropzone.Accept>
            <MantineDropzone.Reject>{t('upload.dropzone.reject')}</MantineDropzone.Reject>
            <MantineDropzone.Idle>{t('upload.dropzone.idle')}</MantineDropzone.Idle>
          </Text>
          <Text ta="center" fz="sm" mt="xs" opacity={0.5}>
            {t('upload.dropzone.tip')}
          </Text>
        </div>
      </MantineDropzone>

      <Box className={classes.controls}>
        <Button variant="default" radius="xl" onClick={() => openRef.current && openRef.current()}>
          {t('upload.dropzone.select', { fileManagerName })}
        </Button>
        {/*<Button variant={'default'} radius="xl" onClick={() => logger.log('upload')}>
        {/*  Select Media*/}
        {/*</Button>*/}
      </Box>
    </div>
  );
};
