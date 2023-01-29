import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;

    padding: 24px;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.SM};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Row = styled.View`
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
`;