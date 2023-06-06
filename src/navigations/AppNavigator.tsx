import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { AuthScreen } from '../screens/AuthScreen';
import { MainStackNavigator } from './MainStackNavigator';
import { useSignIn } from '../hooks/domain/auth/useSignIn';
import { User } from 'firebase/auth';
import { useSignUp } from '../hooks/domain/auth/useSignUp';

export const AppNavigator = () => {
    const { mutate: signIn } = useSignIn();
    const { mutate: signUp } = useSignUp();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        if (user) return;
        console.log('login render');
        const email = 'hoge@hoge.com';
        const password = 'hogehoge';
        signIn({ email, password }, { onSuccess: (data) => setUser(data) });
    }, []);

    return (
        <NavigationContainer>
            {user ? <MainStackNavigator /> : <AuthScreen />}
        </NavigationContainer>
    );
};
