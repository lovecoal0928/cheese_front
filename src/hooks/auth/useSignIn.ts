import { useMutation } from '@tanstack/react-query';
import { authRepository } from '../../repositories/authRepository';

export type SignInParams = {
    email: string;
    password: string;
};

export const useSignIn = () => {
    return {
        ...useMutation(({ email, password }: SignInParams) => {
            return authRepository.signIn(email, password);
        }),
    };
};
