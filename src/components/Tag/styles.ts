import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;

    background-color: ${({ theme }) => theme.COLORS.GRAY_6};
    height: 34px;
    padding: 8px 16px;

    border-radius: 1000px;

    align-self: flex-start;
    align-content: center;
    justify-content: center;
`;

export const Label = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.SM};
    `}

    margin-left: 8px;
`;
