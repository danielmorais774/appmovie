import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Container, ItemCard, ImageCard, TitleMovie, SubTitleMovie, ContentCardInfo } from './styles';

//hooks
import { useNavigation } from '@react-navigation/native';

const ListMovieVertical = ({ data }) => {

    //hooks
    const { navigate } = useNavigation();

    //onClick
    const navigateMovieInfoButton = (item) => {
        navigate('MovieInfo', { movieInfo: item });
    }

    const renderItem = ({ item }) => (
        <ItemCard onPress={() => navigateMovieInfoButton(item)}>
            <ImageCard source={{ uri: item.cover }} />
            <ContentCardInfo>
                <TitleMovie>{item.title}</TitleMovie>
                <SubTitleMovie>GÊNERO: {item.genre}</SubTitleMovie>
                <SubTitleMovie>TEMPO: {item.runtime}</SubTitleMovie>
                <SubTitleMovie>IMDB: {item.imdbGrade}</SubTitleMovie>
                <SubTitleMovie>LANÇAMENTO: {item.launchYear}</SubTitleMovie>
            </ContentCardInfo>
        </ItemCard>
    )

    return (
        <Container>
            <FlatList
                renderItem={renderItem}
                keyExtractor={(_, index) => index.toString()}
                data={data}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ height: 13 }} />}
                ListEmptyComponent={() => <Text style={{textAlign: 'center'}}>Nenhum filme encontrado!!</Text>}
            />
        </Container>
    );
}

export default ListMovieVertical;

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