import { ActionIcon, CloseButton, Grid, Image, Text } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import cx from 'clsx';
import { filesize } from 'filesize';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { FileItem } from './Upload.interface';
import classes from './Upload.module.scss';

export const PreviewItem: React.FC<{
  item: FileItem;
  index: number;
  onRemove: (index: number) => void;
  onRetry: (index: number) => void;
}> = ({ item, index, onRemove, onRetry }) => {
  const info = item.info;
  const { t } = useTranslation(['components']);
  return (
    <Grid className={classes.previewItem} columns={24}>
      <div
        className={cx(classes.uploadProgressBase, {
          [classes.uploadProgressProgress]: item.status === 'progress',
          [classes.uploadProgressFailed]: item.status === 'failed',
          [classes.uploadProgressDone]: item.status === 'done',
        })}
        style={{ width: `${item.progress}%` }}
      />
      <Grid.Col span={6}>
        <div className={classes.itemImage}>
          {item.url && <Image key={index} src={item.url} />}
          <Text
            className={cx(classes.itemStatus, {
              [classes.itemStatusDone]: item.status === 'done',
              [classes.itemStatusFailed]: item.status === 'failed',
              [classes.itemStatusProgress]: item.status === 'progress',
              [classes.itemStatusPending]: item.status === 'pending',
            })}
            size="xs"
          >
            {t(`upload.status.${item.status}`)}
          </Text>
          {item.status === 'failed' && (
            <ActionIcon
              variant="filled"
              aria-label={t('upload.preview.retry')}
              className={classes.retryButton}
              onClick={() => onRetry(index)}
            >
              <IconRefresh style={{ width: '70%', height: '70%' }} stroke={1.5} />
            </ActionIcon>
          )}
        </div>
      </Grid.Col>
      <Grid.Col span={15} style={{ alignItems: 'center', display: 'flex' }}>
        <div className={classes.itemInfo}>
          <Text size="sm" className={classes.infoName} component="div" lineClamp={1}>
            {info.fileName}
          </Text>
          <Text size="xs" opacity={0.5}>
            <strong>{t('upload.preview.size')}</strong>
            <span>{filesize(Number(info.fileSize || 0))}</span>
          </Text>
          <Text size="xs" opacity={0.5}>
            <strong>{t('upload.preview.type')}</strong>
            <span>{info.mimeType}</span>
          </Text>
        </div>
      </Grid.Col>
      <Grid.Col
        span={3}
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: 5,
        }}
      >
        <CloseButton onClick={() => onRemove(index)} aria-label={t('upload.preview.remove')} />
      </Grid.Col>
      {item.error && (
        <Text className={classes.infoError} fw={700} size="sm">
          {t(item.error ?? 'upload.preview.error')}
        </Text>
      )}
    </Grid>
  );
};
