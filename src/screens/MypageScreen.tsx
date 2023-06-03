import React, { useEffect } from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitCard } from '../components/myPage/SubmitCard';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../plugins/firebase';
import { useSignUp } from '../hooks/domain/auth/useSignUp';
import { useCreateUser } from '../hooks/domain/user/useCreateUser';

export const MyPageScreen = () => {
    const data = [
        {
            id: 1,
            title: 'title1',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 2,
            title: 'title2',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            title: 'title3',
            image: 'https://picsum.photos/200/300',
        },
    ];

    const { mutate } = useCreateUser();
    // const { mutate: signUp } = useSignUp();
    useEffect(() => {
        console.log('start');
        const name = 'hoge';
        mutate({ name, iconPath: 'test' });
        console.log('test');
    }, []);

    // const handleGoogleSignIn = async () => {
    //     const provider = new GoogleAuthProvider();
    //     console.log(typeof signInWithPopup);
    //     try {
    //         const result = await signInWithPopup(auth, provider);
    //         // ログイン成功時の処理
    //         const { user } = result;
    //         console.log(user);
    //     } catch (error) {
    //         // エラー時の処理
    //         console.log(error);
    //     }
    // };
    // handleGoogleSignIn();

    const renderSubmitCard = (item: any) => (
        <View style={{ flex: 0.5 }}>
            <SubmitCard item={item} />
        </View>
    );

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => renderSubmitCard(item)}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
        </SafeAreaView>
    );
};
