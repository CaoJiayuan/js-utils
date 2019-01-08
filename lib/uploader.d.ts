declare interface UploadOptions {
    progress ?: (process) => void,
    validate ?: (uploadFile: UploadFile) => boolean,
    chunk ?: boolean,
    success ?: (data: any) => void,
    error ?: (data: any) => void,
    chunkSize ?: number,
    driver ?: string,
    name ?: string,
    stsUrl ?: string
}

declare interface UploadFile {
    isImage: () => boolean,
    isVideo: () => boolean,
    getSize: () => number,
    getExtension: () => string,
    notExceeding: (size: number) => boolean,
    invalidFileMessage: string,
}


declare const fileUpload: (el: HTMLElement, url: string, configs ?: UploadOptions) => void;
declare const upload: (file: File, url: string, configs ?: UploadOptions) => void;
declare const DRIVER_OSS = 'oss';
declare const DRIVER_SERVER = 'server';
export {
    fileUpload,
    upload,
    UploadFile,
    DRIVER_SERVER,
    DRIVER_OSS
}
