import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Container, ItemCard, ImageCard } from './styles';

//hooks
import { useNavigation } from '@react-navigation/native';

const ListMovieHorizontal = ({ data }) => {

    //hooks
    const { navigate } = useNavigation();

    //onClick
    const navigateMovieInfoButton = (item) => {
        navigate('MovieInfo', { movieInfo: item });
    }

    const renderItem = ({ item }) => (
        <ItemCard onPress={() => navigateMovieInfoButton(item)} style={styles.shadowCard}>
            <ImageCard source={{ uri: item.cover }}/>
        </ItemCard>
    )

    return (
        <Container>
            <FlatList
                horizontal
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                data={data}
                contentContainerStyle={{paddingHorizontal: 15}}
                showsHorizontalScrollIndicator={false}
            />
        </Container>
    );
}

export default ListMovieHorizontal;

const styles = StyleSheet.create({
    shadowCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.35,
        shadowRadius: 2,
        elevation: 4,
    }
});