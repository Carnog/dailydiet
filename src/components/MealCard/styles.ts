import styled, { css } from "styled-components/native";

type CircleProps = {
    isOnDiet: boolean
}

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;

    border-radius: 6px;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};

    min-height: 49px;
    max-height: 49px;

    margin: 4px 0px;
`;

export const Time = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.XS};
        color: ${theme.COLORS.GRAY_1};
        padding: 12px;
    `}
`;

export const VerticalDivider = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GRAY_4};
    height: 14px;
    width: 1px;
`;

export const Name = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_2};
        padding: 12px;
        padding-right: 30px;
        flex: 1;
    `}
`;

export const Circle = styled.View<CircleProps>`
    background-color: ${({ theme, isOnDiet }) => isOnDiet ?
        theme.COLORS.GREEN_MID :
        theme.COLORS.RED_MID
    };

    width: 14px;
    height: 14px;

    border-radius: 500px;
    margin-right: 16px;
`