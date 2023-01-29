import { ArrowLeft, ArrowUpRight } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type PercentTypeStyleProps = 'PRIMARY' | 'SECONDARY';

type Props = {
    type: PercentTypeStyleProps;
}

export const Container = styled.View<Props>`
    background-color: ${({ theme, type }): string => {
        return type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
    }};

    width: 100%;
    align-items: center;
    justify-content: center;

    padding: 20px 16px;
    border-radius: 9px;
`;

export const Amount = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.XXL};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.REGULAR};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const ArrorUpButton = styled.TouchableOpacity`
    position: absolute;
    right: 8px;
    top: 8px;
`;

export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;

export const BackButton = styled.TouchableOpacity`
    align-self: flex-start;
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({theme, type}) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<Props>``;