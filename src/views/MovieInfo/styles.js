import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
    background-color: white;
    flex: 1;
`;

export const ContainerMain = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const ViewContainer = styled.View`
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    padding: 20px;
`;

export const ButtonBack = styled.TouchableOpacity`
    justify-content: center;
    width: 20px;
`;

export const TitleMovie = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: #343434;
    margin-bottom: 5px;
`;

export const SubTitleMovie = styled.Text`
    font-size: 14px;
    color: #343434;
    margin-bottom: 5px;
`;

export const SinopseMovie = styled.Text`
    font-size: 14px;
    color: #343434;
    margin-top: 10px;
    text-align: justify;
`;