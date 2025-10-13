import { MediaFile } from 'src/graphql';

export interface FileItem {
  file: File;
  progress: number;
  status: 'pending' | 'done' | 'failed' | 'progress';
  error?: string;
  url?: string;
  id: string;
  info: Partial<MediaFile>;
}
