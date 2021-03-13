import styled from 'styled-components/native';
import FastImage from 'react-native-fast-image';

export const Container = styled.View`
    padding: 20px 20px 10px 20px;
`;

export const ContainerMain = styled.View`
    flex: 1;
    background-color: #ffffff;
`;

export const Row = styled.View`
    flex-direction: row;
`;

export const TitleScreen = styled.Text`
    font-size: 18px;
    color: #343434;
    font-weight: bold;
    margin-bottom: 10px;
    text-align: center;
`;

export const TitleSection = styled.Text`
    font-size: 14px;
    font-weight: bold;
    color: #343434;
    margin-top: 10px;
    margin-bottom: 5px;
`;

export const ContainerSearch = styled.View`
    background-color: #f3f3f3;
    border-radius: 4px;
    padding: 0px 10px;
    height: 40px;
`;

export const SearchFieldCustom = styled.TextInput `
    flex: 1;
    margin-left: 5px;
    color: #343434;
    font-weight: bold;
`;