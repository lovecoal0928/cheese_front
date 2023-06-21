import React from 'react';
import { useSignUp } from '../../hooks/auth/useSignUp';
import { useCreateUser } from '../../hooks/domain/user/useCreateUser';
import { CreateUserRequest } from '../../repositories/user/types';

export const useSignUpScreen = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordForConfirmation, setPasswordForConfirmation] =
        React.useState('');

    const { mutate: signUp } = useSignUp();
    const { mutate: createUser } = useCreateUser();

    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);
    const handlePasswordForConfirmation = (password: string) =>
        setPasswordForConfirmation(password);

    // TODO: フォームのエラーハンドリングを実装
    const handleCreateAccount = () => {
        if (!email || !password || !passwordForConfirmation) return;
        if (password === passwordForConfirmation) return;
        signUp(
            { email, password },
            {
                onSuccess: () => handleSuccessSignUp(dummyProfile),
                onError: (error) => console.log(error),
            }
        );
    };
    const dummyProfile = {
        name: 'ニックネーム',
        iconPath: 'https://bit.ly/broken-link',
    };

    // TODO: 新規作成後にユーザーのプロフィールを作成したい。実装途中
    const handleSuccessSignUp = ({ name, iconPath }: CreateUserRequest) => {
        createUser(
            { name, iconPath },
            {
                onSuccess: () => console.log('success'),
                onError: (error) => console.log(error),
            }
        );
    };

    return {
        handleEmailChange,
        handlePasswordChange,
        handlePasswordForConfirmation,
        handleCreateAccount,

        email,
        password,
        passwordForConfirmation,
    };
};
