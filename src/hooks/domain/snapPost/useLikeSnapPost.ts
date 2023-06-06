import { useMutation } from '@tanstack/react-query';
import { snapPostRepository } from '../../../repositories/snapPost/snapPostRepository';

export const useLikeSnapPost = () => {
    return {
        ...useMutation((snapPostIds: string[]) => {
            return snapPostRepository.like({ snapPostIds });
        }),
    };
};
