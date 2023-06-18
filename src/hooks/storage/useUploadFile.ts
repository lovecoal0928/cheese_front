import { generateId } from '../../libs/generateId';
import { storageRepository } from '../../repositories/storageRepository';
import { useMutation } from '@tanstack/react-query';

export type UploadFileParams = {
    base64Url: string;
    folderName: string;
};

export type UploadFileResult = {
    fileUrl: string;
    filePath: string;
};

export const useUploadFile = () => {
    const mutateFn = async ({
        base64Url,
        folderName,
    }: UploadFileParams): Promise<UploadFileResult> => {
        const blob = await toBlobFromBase64Url(base64Url);
        const filePath = await storageRepository.upload(
            blob,
            generateFilePath(folderName)
        );
        const fileUrl = await storageRepository.getFileUrl(filePath);
        return {
            fileUrl,
            filePath,
        };
    };

    const toBlobFromBase64Url = async (base64Url: string): Promise<Blob> => {
        const res = await fetch(base64Url);
        const blob = await res.blob();
        return blob;
    };

    const generateFilePath = (folderName: string): string => {
        return `${folderName}/${generateId()}`;
    };

    return {
        ...useMutation(mutateFn),
    };
};
