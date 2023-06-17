import React from 'react';
import { FlatList, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SubmitCard } from '../components/myPage/SubmitCard';

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
