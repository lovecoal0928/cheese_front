import React, { useRef, useState } from 'react';
import { Image, PanResponder, StyleSheet } from 'react-native';
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

    // 画像のポシションを管理する
    const position = useRef(new Animated.ValueXY()).current;
    // 画像がタッチされた時のイベントを管理する
    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (e, gestureState) => {
                position.setValue({ x: gestureState.dx, y: gestureState.dy });
            },
            // onPanResponderRelease: (e, gestureState) => {
            // },
        })
    ).current;

    // 移動量に対して回転する
    const rotate = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: ['-10deg', '0deg', '10deg'],
        extrapolate: 'clamp',
    });

    // 次カードの透明度を管理する
    const nextCardOpacity = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp',
    });

    // 次カードのサイズを管理する
    const nextCardScale = position.x.interpolate({
        inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
        outputRange: [1, 0.8, 1],
        extrapolate: 'clamp',
    });


    // 今の画像のインデックスを管理する
    const [currentIndex, setCurrentIndex] = useState(0);

    const RenderPictures = () => {
        return pictures.map((picture, i) => {
            if (i < currentIndex) {
                return null;
            }
            if (i === currentIndex) {
                return (
                    <Animated.View
                        {...panResponder.panHandlers}
                        key={i}
                        style={[
                            {
                                ...position.getLayout(),
                                transform: [{ rotate: rotate }],
                            }
                            , {
                                height: SCREEN_HEIGHT - 150,
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
                );
            } else {
                return (
                    <Animated.View
                        key={i}
                        style={[
                            {
                                height: SCREEN_HEIGHT - 150,
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
                );
            }
        }).reverse();
    };

    return (
        <SafeAreaView>
            <View style={{ flex: 1 }}>
                {RenderPictures()}
            </View>
        </SafeAreaView >
    );
};