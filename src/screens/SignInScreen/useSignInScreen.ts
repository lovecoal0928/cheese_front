import React from 'react';

export const useSignInScreen = () => {
    const [email, setEmail] = React.useState<string>();
    const [password, setPassword] = React.useState<string>();

    const handleEmailChange = (email: string) => setEmail(email);
    const handlePasswordChange = (password: string) => setPassword(password);

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
    };
};
