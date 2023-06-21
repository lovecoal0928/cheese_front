import React from 'react';
import { useSignIn } from '../../hooks/auth/useSignIn';

export const useSignInScreen = () => {
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();

    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);

    const { mutate } = useSignIn();

    const handleLogin = () => {
        if (!email || !password) return;
        mutate(
            { email, password },
            {
                onSuccess: (user) => console.log(user),
                onError: (error) => console.log(error),
            }
        );
        //TODO: エラーハンドリング
    };

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleLogin,
    };
};
