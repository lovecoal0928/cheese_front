import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { auth } from '../plugins/firebase';
import { useAuthUser } from '../state/authUser';
import { ActivityIndicator } from 'react-native-paper';
interface Props {
    children: React.ReactNode;
}
export const AuthProvider = ({ children }: Props): JSX.Element => {
    const { authUser, setAuthUser } = useAuthUser();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            // 認証状態の変化を監視するコールバック関数
            if (user) {
                console.log('login');
                setAuthUser(user);
            } else {
                console.log('not login');
                setAuthUser(null);
            }
        });

        // コンポーネントのアンマウント時に監視を解除する
        return () => unsubscribe();
    }, []);

    if (authUser === undefined) return <ActivityIndicator size="large" />;

    return <>{children}</>;
};
