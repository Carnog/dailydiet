import styled, { css } from "styled-components/native";

export type InfoTypeStyleProps = 'PRIMARY' | 'SECONDARY' | 'NEUTRAL';


type Props = {
    type: InfoTypeStyleProps,
}

export const Container = styled.View<Props>`
    padding: 16px;
    margin: 6px;
    flex: 1;

    align-items: center;
    align-self: stretch;
    justify-content: center;

    border-radius: 8px;

    ${({ theme, type }) => css`
        background-color: ${type === 'PRIMARY' ? theme.COLORS.GREEN_LIGHT :
            type === 'SECONDARY' ? theme.COLORS.RED_LIGHT :
                theme.COLORS.GRAY_6
        };
    `}
`;

export const Number = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XL};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_2};
        text-align: center;
    `}
`;
