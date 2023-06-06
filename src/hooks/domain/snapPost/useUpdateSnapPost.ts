import { useMutation } from '@tanstack/react-query';
import { UpdateSnapPostRequest } from '../../../repositories/snapPost/types';
import { snapPostRepository } from '../../../repositories/snapPost/snapPostRepository';

export const useUpdateSnapPost = () => {
    return {
        ...useMutation((params: UpdateSnapPostRequest) => {
            return snapPostRepository.update(params);
        }),
    };
};
