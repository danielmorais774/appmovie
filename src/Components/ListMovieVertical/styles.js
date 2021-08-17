import styled from 'styled-components/native';

export const Container = styled.View`
    padding: 5px 20px;
`;

export const ItemCard = styled.TouchableOpacity`
    flex-direction: row;
`;

export const ImageCard = styled.Image`
    width: 90px;
    height: 130px;
    border-radius: 4px;
`;

export const TitleMovie = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #323232;
    margin-bottom: 3px;
`;

export const SubTitleMovie = styled.Text`
    font-size: 12px;
    color: #323232;
`;

export const ContentCardInfo = styled.View`
    flex: 1;
    padding-left: 10px;
    padding-top: 8px;
`;
