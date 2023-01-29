import { SafeAreaView } from "react-native-safe-area-context";
import styled, {css} from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;

    padding: 24px;

    background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const HomeHeader = styled.View`
    width: 100%;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 32px;
`;

export const Logo = styled.Image`
    width: 82px;
    height: 37px;
`;

export const UserImg = styled.Image`
    width: 40px;
    height: 40px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
        margin: 40px 0px 8px;
    `}
`;