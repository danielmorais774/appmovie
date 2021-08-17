import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ScrollView, Animated, Image } from 'react-native';

import { Container, ViewContainer, ButtonBack, TitleMovie, SubTitleMovie, SinopseMovie } from './styles';

//icons
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

//libs
import { useNavigation } from '@react-navigation/native';

//component externos
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';


const MovieInfo = ({ route }) => {

    let HEADER_MAX_HEIGHT = 290;
    let HEADER_MIN_HEIGHT = 0;
    const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

    // states
    const [scrollY, setScrollY] = useState(new Animated.Value(0));

    const headerHeight = scrollY.interpolate({
        inputRange: [0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT],
        outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
        extrapolate: 'clamp'
    });
    const imageOpacity = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
        outputRange: [1, 1, 0],
        extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
        inputRange: [0, HEADER_SCROLL_DISTANCE],
        outputRange: [0, -50],
        extrapolate: 'clamp',
    });

    //params
    const movieInfo = route.params?.movieInfo;

    //hooks
    const { goBack } = useNavigation();

    //components
    const AnimatedTopBarCustom = Animated.createAnimatedComponent(LinearGradient)

    return (
        <Container>
            <AnimatedTopBarCustom
                style={{ ...styles.topBarCustom, opacity: imageOpacity }}
                colors={['rgba(52,52,52,0.71)', 'rgba(70,70,70,0.65)', 'rgba(92,92,92,0.3)', 'rgba(140,140,140,0.08)']}
                locations={[0, 0.22, 0.55, 1]}
            >
                <ButtonBack onPress={goBack}>
                    <FontAwesome5Icons name="arrow-left" color="#fff" size={18} />
                </ButtonBack>
            </AnimatedTopBarCustom>
            <ScrollView
                style={{ flex: 1 }}
                scrollEventThrottle={16}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false }
                )}
            >
                <Animated.View style={{ ...styles.header, height: headerHeight, zIndex: 0 }}>
                    <Animated.View style={{ minHeight: HEADER_MAX_HEIGHT, translateY: imageTranslate, opacity: imageOpacity }}>
                        <View style={{ height: 350 }}>
                            <Image source={{ uri: movieInfo?.images[0]?.url }} style={{ height: 340 }} />
                        </View>
                    </Animated.View>
                </Animated.View>

                <ViewContainer style={{ paddingHorizontal: 0, paddingBottom: 80, marginTop: HEADER_MAX_HEIGHT, backgroundColor: "#fff" }}>
                    <TitleMovie>
                        {movieInfo.title}
                    </TitleMovie>
                    <SubTitleMovie>
                        {movieInfo.genre}
                    </SubTitleMovie>
                    <SinopseMovie>
                        {movieInfo.sinopse}
                    </SinopseMovie>

                    <FlatList
                        horizontal
                        style={{marginTop: 30}}
                        keyExtractor={(_, index) => index.toString()}
                        data={movieInfo.images}
                        renderItem={({ item }) => <FastImage style={styles.imageMovie} source={{ uri: item.url }} />}
                        ItemSeparatorComponent={() => <View style={{width: 10}}/>}
                    />
                </ViewContainer>
            </ScrollView>
        </Container>
    )
}

export default MovieInfo;

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,

    },
    topBarCustom: {
        position: "absolute",
        top: 0,
        height: 50,
        width: '100%',
        zIndex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    imageMovie: {
        width: 100,
        height: 100,
        borderRadius: 4
    }
});