import { MediaType } from 'src/graphql';

export class FileHelper {
  // 严格允许的 MIME 类型（按 MediaType 分类）
  static readonly imageMimeTypes: string[] = [
    'image/jpeg',
    'image/png',
    'image/gif',
    'image/webp',
    'image/svg+xml',
    'image/tiff',
    'image/bmp',
    'image/heic',
    'image/heif',
    'image/avif',
    'image/x-icon',
    'image/vnd.microsoft.icon',
  ];

  static readonly videoMimeTypes: string[] = ['video/mp4', 'video/webm'];

  static readonly audioMimeTypes: string[] = ['audio/mpeg', 'audio/wav'];

  static readonly documentMimeTypes: string[] = [
    'text/plain',
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'application/vnd.ms-powerpoint',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    'application/wps-office.wps',
    'application/wps-office.et',
    'application/wps-office.dps',
    'application/wps-office.wpt',
    'application/wps-office.ett',
    'application/wps-office.dpt',
  ];

  static readonly archiveMimeTypes: string[] = [
    'application/zip',
    'application/x-rar-compressed',
    'application/x-7z-compressed',
    'application/x-tar',
    'application/gzip',
    'application/x-bzip2',
  ];

  // 严格允许的扩展名（不含点）
  static readonly imageExtensions: string[] = [
    'jpg',
    'jpeg',
    'png',
    'gif',
    'webp',
    'svg',
    'tiff',
    'tif',
    'bmp',
    'heic',
    'heif',
    'avif',
    'ico',
  ];

  static readonly videoExtensions: string[] = ['mp4', 'webm'];

  static readonly audioExtensions: string[] = ['mp3', 'wav'];

  static readonly documentExtensions: string[] = [
    'txt',
    'pdf',
    'doc',
    'docx',
    'xls',
    'xlsx',
    'ppt',
    'pptx',
    'wps',
    'et',
    'dps',
    'wpt',
    'ett',
    'dpt',
  ];

  static readonly archiveExtensions: string[] = ['zip', 'rar', '7z', 'tar', 'gz', 'bz2'];

  toBase64Url(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      if (!file.type.startsWith('image/')) {
        resolve('');
        return;
      }

      const reader = new FileReader();
      reader.onload = () => {
        if (reader.result) {
          resolve(reader.result.toString());
        } else {
          reject(new Error('Failed to convert file to base64'));
        }
      };
      reader.onerror = () => {
        reject(new Error('Error reading file'));
      };
      reader.readAsDataURL(file);
    });
  }

  getMediaType(mimeType: string) {
    let mediaType: MediaType = MediaType.Other;
    if (mimeType.startsWith('image/')) {
      mediaType = MediaType.Image;
    } else if (mimeType.startsWith('video/')) {
      mediaType = MediaType.Video;
    } else if (mimeType.startsWith('audio/')) {
      mediaType = MediaType.Audio;
    } else if (FileHelper.documentMimeTypes.includes(mimeType)) {
      mediaType = MediaType.Document;
    } else if (FileHelper.archiveMimeTypes.includes(mimeType)) {
      mediaType = MediaType.Archive;
    }
    return mediaType;
  }

  // 获取指定 MediaType 的严格 MIME 白名单合集
  getAllowedMimeTypes(mediaTypes?: MediaType[]) {
    const selected: MediaType[] =
      Array.isArray(mediaTypes) && mediaTypes.length > 0
        ? mediaTypes
        : [MediaType.Image, MediaType.Video, MediaType.Audio, MediaType.Document, MediaType.Archive];

    const result: string[] = [];
    const add = (arr: string[]) => {
      for (const it of arr) {
        if (!result.includes(it)) {
          result.push(it);
        }
      }
    };

    for (const type of selected) {
      switch (type) {
        case MediaType.Image:
          add(FileHelper.imageMimeTypes);
          break;
        case MediaType.Video:
          add(FileHelper.videoMimeTypes);
          break;
        case MediaType.Audio:
          add(FileHelper.audioMimeTypes);
          break;
        case MediaType.Document:
          add(FileHelper.documentMimeTypes);
          break;
        case MediaType.Archive:
          add(FileHelper.archiveMimeTypes);
          break;
        default:
          break;
      }
    }

    return result;
  }

  // 获取指定 MediaType 的严格扩展名白名单合集（不含点）
  getAllowedExtensions(mediaTypes?: MediaType[]) {
    const selected: MediaType[] =
      Array.isArray(mediaTypes) && mediaTypes.length > 0
        ? mediaTypes
        : [MediaType.Image, MediaType.Video, MediaType.Audio, MediaType.Document, MediaType.Archive];

    const result: string[] = [];
    const add = (arr: string[]) => {
      for (const it of arr) {
        if (!result.includes(it)) {
          result.push(it);
        }
      }
    };

    for (const type of selected) {
      switch (type) {
        case MediaType.Image:
          add(FileHelper.imageExtensions);
          break;
        case MediaType.Video:
          add(FileHelper.videoExtensions);
          break;
        case MediaType.Audio:
          add(FileHelper.audioExtensions);
          break;
        case MediaType.Document:
          add(FileHelper.documentExtensions);
          break;
        case MediaType.Archive:
          add(FileHelper.archiveExtensions);
          break;
        default:
          break;
      }
    }

    return result;
  }

  // 提供给 Dropzone 的 accept（严格 MIME 列表，不再使用通配符）
  getAcceptMimeTypesFor(mediaTypes?: MediaType[]) {
    return this.getAllowedMimeTypes(mediaTypes);
  }

  // 同时基于 MIME 与扩展名进行校验（扩展名不带点）
  isFileAllowed(file: File, mediaTypes?: MediaType[]) {
    const mimeAllowed = this.getAllowedMimeTypes(mediaTypes);
    const mimeOk = mimeAllowed.includes(file.type);
    if (!mimeOk) return false;

    const ext = (file.name.split('.').pop() || '').toLowerCase();
    const type = this.getMediaType(file.type);

    let extsAllowed: string[] = [];
    switch (type) {
      case MediaType.Image:
        extsAllowed = FileHelper.imageExtensions;
        break;
      case MediaType.Video:
        extsAllowed = FileHelper.videoExtensions;
        break;
      case MediaType.Audio:
        extsAllowed = FileHelper.audioExtensions;
        break;
      case MediaType.Document:
        extsAllowed = FileHelper.documentExtensions;
        break;
      case MediaType.Archive:
        extsAllowed = FileHelper.archiveExtensions;
        break;
      default:
        return false;
    }

    return extsAllowed.includes(ext);
  }
}
