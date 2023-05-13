import React from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

export const SubmitScreen = () => {
    return (
        <View>
            <TextInput
                label={'タイトル'}
            />
            <TextInput
                label={'場所'}
            />
            <TextInput
                label={'コメント'}
                multiline={true}
                numberOfLines={10}
                style={{ height: 120 }}
            />
            <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
            >
                写真を追加</Button>
        </View>
    );
};
