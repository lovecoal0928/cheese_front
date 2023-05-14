import React from 'react';
import { FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitCard } from '../components/mypage/SubmitCard';

export const MypageScreen = () => {
    const data = [
        {
            id: 1,
            title: 'title1',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 2,
            title: 'title2',
            image: 'https://picsum.photos/200/300'
        },
        {
            id: 3,
            title: 'title3',
            image: 'https://picsum.photos/200/300'
        },
    ];

    return (
        <SafeAreaView>
            <FlatList
                data={data}
                renderItem={({ item }) => <SubmitCard item={item} />}
                keyExtractor={item => item.id.toString()}
            />
        </SafeAreaView>
    );
};
