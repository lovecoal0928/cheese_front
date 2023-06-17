import { storageRepository } from '../repositories/storageRepository';
import { useMutation } from '@tanstack/react-query';

export type UploadFileParams = {
    base64Url: string;
    folderName: string;
};
export const useUploadFile = () => {
    const mutateFn = async ({
        base64Url,
        folderName,
    }: UploadFileParams): Promise<{
        fileUrl: string;
    }> => {
        const fileUrl = await storageRepository.upload(base64Url, folderName);
        return {
            fileUrl,
        };
    };
    return {
        ...useMutation(mutateFn),
    };
};
