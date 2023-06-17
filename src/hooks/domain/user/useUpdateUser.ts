import { useMutation } from '@tanstack/react-query';
import { UpdateUserRequest } from '../../../repositories/user/types';
import { userRepository } from '../../../repositories/user/userRepository';

export const useUpdateUser = () => {
    return {
        ...useMutation((params: UpdateUserRequest) => {
            return userRepository.update(params);
        }),
    };
};
