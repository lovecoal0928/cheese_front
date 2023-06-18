import { storageRepository } from '../../repositories/storageRepository';
import { useMutation } from '@tanstack/react-query';

export type DeleteFileParams = {
    filePath: string;
};

export const useDeleteFile = () => {
    const mutateFn = async ({ filePath }: DeleteFileParams): Promise<void> => {
        await storageRepository.delete(filePath);
    };
    return {
        ...useMutation(mutateFn),
    };
};
