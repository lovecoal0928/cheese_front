import { useMutation } from '@tanstack/react-query';
import { authRepository } from '../../../repositories/authRepository';

export type SignUpParams = {
    email: string;
    password: string;
};

export const useSignUp = () => {
    return {
        ...useMutation(({ email, password }: SignUpParams) => {
            return authRepository.singUp(email, password);
        }),
    };
};
