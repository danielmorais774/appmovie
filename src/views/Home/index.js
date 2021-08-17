import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, StatusBar, ActivityIndicator } from 'react-native';

import { Container, ContainerMain, Row, AppName, TitleSection, Containerload } from './styles';

//icons
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';

//hooks
import { useNavigation } from '@react-navigation/native';

//component externos
import FastImage from 'react-native-fast-image';

//component internos
import ListMovieHorizontal from '../../Components/ListMovieHorizontal';
import ListMovieVertical from '../../Components/ListMovieVertical';

//services
import api from '../../services/api';

const Home = () => {

    //hooks
    const { navigate } = useNavigation();

    //state
    const [homeData, setHomeData] = useState([]);

    //state controll
    const [isLoading, setIsloading] = useState(true);

    //fetch
    const fetchHomeApi = () => {
        setIsloading(true);
        api.get('api/home').then((data) => {
            setHomeData(data);
            setIsloading(false);
        });
    }

    //ciclos
    useEffect(() => {
        fetchHomeApi();
    }, []);

    //onClick
    const navigateSearchButton = () => {
        navigate('Search');
    }

    const HeaderMain = () => (
        <Container>
            <Row style={{ alignItems: 'center' }}>
                <Row style={{ flex: 1, alignItems: 'center' }}>
                    <FastImage style={styles.imageLogo} source={require('../../assets/logo/appmovie.png')} />
                    <AppName>APP<Text style={{ color: '#FD4848' }}>MOVIE</Text></AppName>
                </Row>
                <TouchableOpacity onPress={navigateSearchButton}>
                    <FontAwesome5Icons name="search" size={22} color="#343434" />
                </TouchableOpacity>
            </Row>
        </Container>
    )

    return (
        <ContainerMain>
            <StatusBar backgroundColor="#FD4848" />
            {isLoading === false ?
                <FlatList
                    ListHeaderComponent={() => <HeaderMain />}
                    data={homeData}
                    keyExtractor={(_, index) => index.toString()}
                    renderItem={({ item }) =>
                        <>
                            <TitleSection>{item.title}</TitleSection>
                            {item.gridView === 'horizontal' &&
                                <ListMovieHorizontal data={item.innerData} />
                            }
                            {item.gridView === 'vertical' &&
                                <ListMovieVertical data={item.innerData} />
                            }
                        </>
                    }
                    showsVerticalScrollIndicator={false}
                />
                :
                <>
                    <HeaderMain />
                    <Containerload>
                        <ActivityIndicator size="large" color="#FD4848" />
                    </Containerload>
                </>
            }
        </ContainerMain>
    )
}

export default Home;

const styles = StyleSheet.create({
    imageLogo: {
        width: 25,
        height: 25,
        marginRight: 5
    }
});