import React from 'react';
import { Image } from 'react-native';
import { Animated, Dimensions, SafeAreaView, View } from 'react-native';

export const HomeScreen = () => {

    const SCREEN_HEIGHT = Dimensions.get('window').height;
    const SCREEN_WIDTH = Dimensions.get('window').width;
    const pictures = [
        { id: 1, uri: ('https://picsum.photos/200/300') },
        { id: 2, uri: ('https://picsum.photos/200/300') },
        { id: 3, uri: ('https://picsum.photos/200/300') },
        { id: 4, uri: ('https://picsum.photos/200/300') },
        { id: 5, uri: ('https://picsum.photos/200/300') },
        { id: 6, uri: ('https://picsum.photos/200/300') },
    ];

    const RenderPictures = () => {
        return pictures.map((picture, i) => (
            <Animated.View
                key={picture.id}
                style={[{
                    height: SCREEN_HEIGHT * 0.79,
                    width: SCREEN_WIDTH,
                    padding: 10,
                    position: 'absolute',
                }]}
            >
                <Image
                    style={{
                        flex: 1,
                        resizeMode: 'cover',
                        borderRadius: 20,
                    }}
                    source={{ uri: pictures[0].uri }}
                />

            </Animated.View>
        ));
    };


    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                {RenderPictures()}
            </View>
        </SafeAreaView >
    );
};
