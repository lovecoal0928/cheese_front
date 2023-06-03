import { useMutation } from '@tanstack/react-query';
import { UserRequest } from '../../../repositories/user/types';
import { userRepository } from '../../../repositories/user/userRepository';

export const useCreateUser = () => {
    return {
        ...useMutation((params: UserRequest) => {
            return userRepository.create(params);
        }),
    };
};
