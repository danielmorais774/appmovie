import React, { useState, useEffect, useCallback } from 'react';

import { ActivityIndicator } from 'react-native';

import { Container, ContainerMain, Row, TitleScreen, ContainerSearch, SearchFieldCustom } from './styles';

//icons
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

//component internos
import ListMovieVertical from '../../Components/ListMovieVertical';

const Search = () => {

    //states
    const [search, setSearch] = useState(null);
    const [moviesData, setMoviesData] = useState([]);

    //state controll
    const [isLoading, setIsloading] = useState(false);

    //fetch
    const fetchHomeApi = () => {
        setIsloading(true);
        api.get('api/movies', { q: search }).then((data) => {
            setMoviesData(data.movies);
            setIsloading(false);
        });
    }

    //ciclos
    useEffect(() => {
        fetchHomeApi();
    }, [search]);

    const SearchField = useCallback(({ value }) => (
        <ContainerSearch>
            <Row style={{ alignItems: 'center' }}>
                <FontAwesome5Icons name="search" size={18} color="#FD4848" />
                <SearchFieldCustom placeholder="Digite o nome do filme..." value={value} onChangeText={(val) => setSearch(val)} />
            </Row>
        </ContainerSearch>
    ), [])

    const Header = useCallback(() => (
        <Container>
            <TitleScreen>Pesquisa</TitleScreen>
            <SearchField value={search} />
        </Container>
    ), [])

    return (
        <ContainerMain>
            <Header />
            {isLoading === false ?
                <ListMovieVertical data={moviesData} />
                :
                <ActivityIndicator style={{marginTop: 30}} size="large" color="#FD4848"/>
            }
        </ContainerMain>
    )
}

export default Search;
