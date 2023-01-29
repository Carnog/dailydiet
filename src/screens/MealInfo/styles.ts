import { ModalProps } from "react-native";
import styled, { css } from "styled-components/native";

type Props = {
    isOnDiet: boolean
}

export const Container = styled.View<Props>`
    flex: 1;

    background-color: ${({ theme, isOnDiet }) => isOnDiet ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const MealData = styled.View`
    flex: 1;
    
    width: 100%;

    background-color: ${({ theme }) => theme.COLORS.GRAY_7};

    padding: 24px;

    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.LG};
    `}
`;

export const DateTime = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD};

        margin-top: 16px;
    `}
`;

export const Description = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_2};

        margin: 8px 0px;
    `}
`;

export const VerticalGap = styled.View`
    padding: 9px 0px;
`;

export const ModalContainer = styled.View`
    flex: 1;
    width: 100%;
    background: rgba(0,0,0,0.25);
    padding: 24px;

    align-items: center;
    align-content: center;
    justify-content: center;
`;

export const ModalTitle = styled.Text`
    ${({theme}) => css`
        font-size: ${theme.FONT_SIZE.LG};
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.GRAY_2};

        text-align: center;
        margin-bottom: 32px;
    `}
`;

export const ModalCard = styled.View`
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.GRAY_7};
    border-radius: 8px;
    padding: 24px;
`;

export const Row = styled.View`
    flex-direction: row;
`;