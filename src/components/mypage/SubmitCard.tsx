import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-paper';

type Props = {
    item: {
        id: number;
        title: string;
        image: string;
    };
};


export const SubmitCard = ({ item }: Props) => {
    return (
        <View style={styles.container}>
            <Card style={styles.card}>

                <Card.Title title="Card Title" subtitle="Card Subtitle" />
                <Card.Content>
                    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                </Card.Content>

            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 8,
    },
    card: {
        width: '100%',
        height: 300,
    }
});