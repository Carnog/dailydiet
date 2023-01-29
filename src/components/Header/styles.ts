import { ArrowLeft } from "phosphor-react-native";
import styled, { css } from "styled-components/native";

export type HeaderTypeStyleProp = 'PRIMARY' | 'SECONDARY' | 'NEUTRAL';

type Props = {
    type: HeaderTypeStyleProp;
}

export const Container = styled.View<Props>`
    width: 100%;

    flex-direction: row;

    justify-content: center;
    align-items: center;

    padding: 52px;

    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT :
            type === 'SECONDARY' ? theme.COLORS.RED_LIGHT :
                theme.COLORS.GRAY_6
        };
    `}
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const BackIcon = styled(ArrowLeft).attrs<Props>(({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_DARK :
        type === 'SECONDARY' ? theme.COLORS.RED_DARK :
            theme.COLORS.GRAY_1,
})) <Props>`
    align-self: flex-start;
    
`;

export const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: 56px;
    left: 24px;
`;