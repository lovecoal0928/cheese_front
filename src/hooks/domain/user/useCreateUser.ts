import { useMutation } from '@tanstack/react-query';
import { CreateUserRequest } from '../../../repositories/user/types';
import { userRepository } from '../../../repositories/user/userRepository';

export const useCreateUser = () => {
    return {
        ...useMutation((params: CreateUserRequest) => {
            return userRepository.create(params);
        }),
    };
};
