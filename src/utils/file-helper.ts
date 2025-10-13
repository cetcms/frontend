import { MediaType } from 'src/graphql';

export class FileHelper {
  toBase64Url(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      // 检查文件类型是否为图片
      if (!file.type.startsWith('image/')) {
        resolve(''); // 非图片文件返回空字符串
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
    const archiveTypes = [
      'application/zip',
      'application/x-rar-compressed',
      'application/x-7z-compressed',
      'application/x-tar',
      'application/gzip',
      'application/x-bzip2',
      'application/x-lzip',
      'application/x-xz',
    ];
    const documentMimeTypes = [
      // Microsoft Word
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'application/vnd.ms-word.document.macroEnabled.12',

      // Microsoft Excel
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'application/vnd.ms-excel.sheet.macroEnabled.12',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.template',

      // Microsoft PowerPoint
      'application/vnd.ms-powerpoint',
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      'application/vnd.ms-powerpoint.presentation.macroEnabled.12',
      'application/vnd.openxmlformats-officedocument.presentationml.slideshow',

      // Microsoft Visio
      'application/vnd.visio',
      'application/vnd.visio2013',
      'application/vnd.ms-visio.drawing',
      'application/vnd.ms-visio.template',

      // Microsoft Project
      'application/vnd.ms-project',

      // Microsoft Access
      'application/vnd.ms-access',

      // Microsoft Publisher
      'application/x-mspublisher',

      // WPS Office
      'application/wps-office.wps',
      'application/vnd.ms-wpl',
      'application/wps-office.et',
      'application/vnd.ms-ets',
      'application/wps-office.dps',
      'application/vnd.ms-dps',
      'application/wps-office.pdf',

      // PDF
      'application/pdf',
      'application/x-pdf',
      'application/acrobat',
      'applications/vnd.pdf',

      // 电子书
      'application/epub+zip',
      'application/x-mobipocket-ebook',
      'application/vnd.amazon.ebook',

      // 流程图
      'application/vnd.jgraph.mxfile',
      'application/vnd.gliffy+json',
      'application/vnd.omni-graffle',
      'application/x-dia-diagram',
      'application/vnd.graphml+json',
      'application/graphml+xml',

      // 脑图
      'application/vnd.xmind.workbook',
      'application/x-xmind',
      'application/x-freemind',
      'application/vnd.freemind',
      'application/vnd.mindjet.mindmanager',
      'application/x-mindmanager',
      'application/vnd.mindnode',
      'application/vnd.simplemind',
      'application/x-opml+xml',

      // 文本和标记
      'text/plain',
      'text/markdown',
      'text/x-markdown',
      'text/rtf',
      'application/rtf',
      'text/html',
      'text/css',
      'text/javascript',
      'application/javascript',
      'application/json',
      'application/xml',
      'text/xml',
    ];
    let mediaType: MediaType = MediaType.Other;
    if (mimeType.startsWith('image/')) {
      mediaType = MediaType.Image;
    } else if (mimeType.startsWith('video/')) {
      mediaType = MediaType.Video;
    } else if (mimeType.startsWith('audio/')) {
      mediaType = MediaType.Audio;
    } else if (documentMimeTypes.includes(mimeType)) {
      mediaType = MediaType.Document;
    } else if (archiveTypes.includes(mimeType)) {
      mediaType = MediaType.Archive;
    }
    return mediaType;
  }
}
