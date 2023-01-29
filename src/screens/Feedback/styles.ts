import styled, { css } from "styled-components/native";

type Props = {
    isOnDiet: boolean,
}

export const Container = styled.View`
    flex: 1;

    padding: 32px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};

    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text<Props>`
    ${({ theme, isOnDiet }) => css`
        color: ${isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL};

        text-align: center;
        margin-bottom: 8px;
    `};
`;

export const Subtitle = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};

        text-align: center;
        margin-bottom: 40px;
    `}
`;

export const B = styled.Text`
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Img = styled.Image`
    margin-bottom: 32px
`;