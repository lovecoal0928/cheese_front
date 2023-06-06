import { useMutation } from '@tanstack/react-query';
import { CreateSnapPostRequest } from '../../../repositories/snapPost/types';
import { snapPostRepository } from '../../../repositories/snapPost/snapPostRepository';

export const useCreateSnapPost = () => {
    return {
        ...useMutation((params: CreateSnapPostRequest) => {
            return snapPostRepository.create(params);
        }),
    };
};
