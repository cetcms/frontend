import { ActionIcon, CloseButton, Grid, Image, Text } from '@mantine/core';
import { IconRefresh } from '@tabler/icons-react';
import cx from 'clsx';
import { filesize } from 'filesize';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Iconify } from 'src/components';
import { MediaType } from 'src/graphql';

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

  // Detect previewable types
  const mime = info.mimeType || '';
  const isPDF = mime.includes('pdf');
  const isText =
    mime.startsWith('text/') ||
    [
      'application/json',
      'application/xml',
      'text/html',
      'text/css',
      'application/javascript',
      'text/javascript',
      'text/markdown',
      'text/x-markdown',
      'application/rtf',
      'text/rtf',
    ].includes(mime);

  const [textPreview, setTextPreview] = React.useState<string | null>(null);
  React.useEffect(() => {
    if (isText && item.file) {
      try {
        const reader = new FileReader();
        reader.onload = () => {
          const content = typeof reader.result === 'string' ? reader.result : '';
          // Cap content length for performance
          setTextPreview(content.slice(0, 10000));
        };
        reader.onerror = () => setTextPreview(null);
        reader.readAsText(item.file);
      } catch {
        setTextPreview(null);
      }
    } else {
      setTextPreview(null);
    }
    // cleanup
    return () => setTextPreview(null);
  }, [item.file, mime, isText]);

  const getFallbackIcon = () => {
    if (info.mediaType === MediaType.Archive) return 'mdi:zip-box';
    if (info.mediaType === MediaType.Document) {
      if (mime.includes('word')) return 'mdi:file-word';
      if (mime.includes('excel') || mime.includes('spreadsheet')) return 'mdi:file-excel';
      if (mime.includes('powerpoint') || mime.includes('presentation')) return 'mdi:file-powerpoint';
      return 'mdi:file-document-outline';
    }
    if (info.mediaType === MediaType.Audio) return 'mdi:file-music';
    if (info.mediaType === MediaType.Video) return 'mdi:file-video';
    if (info.mediaType === MediaType.Image) return 'mdi:file-image-outline';
    return 'mdi:file-outline';
  };

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
          <div className={classes.itemPreviewContent}>
            {info.mediaType === MediaType.Image && item.url ? (
              <Image key={index} src={item.url} />
            ) : isPDF && item.url ? (
              <iframe
                src={item.url}
                title={info.fileName || 'pdf'}
                style={{ width: '100%', height: '100%', border: 0 }}
              />
            ) : info.mediaType === MediaType.Video && item.url ? (
              <video src={item.url} controls style={{ width: '100%', height: '100%', objectFit: 'contain' }}>
                <track kind="captions" />
              </video>
            ) : info.mediaType === MediaType.Audio && item.url ? (
              <audio src={item.url} controls style={{ width: '95%' }}>
                <track kind="captions" />
              </audio>
            ) : isText && textPreview ? (
              <pre>{textPreview}</pre>
            ) : (
              <Iconify icon={getFallbackIcon()} fontSize={48} />
            )}
          </div>
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
