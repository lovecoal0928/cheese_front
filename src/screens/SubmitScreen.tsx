import React from 'react';
import { View } from 'react-native';
import { Text, TextInput } from 'react-native-paper';

export const SubmitScreen = () => {
    return (
        <View>
            <TextInput
                label={'タイトル'}
            />
            <TextInput
                label={'場所'}
            />
        </View>
    );
};
