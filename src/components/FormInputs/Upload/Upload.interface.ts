import { MediaFileFragment } from 'src/graphql';

export type UploadValueType = MediaFileFragment | MediaFileFragment[] | string | string[] | null;

export interface FileItem {
  file: File;
  progress: number;
  status: 'pending' | 'done' | 'failed' | 'progress';
  error?: string;
  url?: string;
  id: string;
  info: Partial<MediaFileFragment>;
}
