import styled, { css } from "styled-components/native";

export type DotTypeStyleProps = 'YES' | 'NO';

type Props = {
    isOnDiet: boolean;
}

export const Container = styled.View<Props>`
    ${({ theme, isOnDiet }) => css`
        background-color: ${isOnDiet ? theme.COLORS.GREEN_DARK
            : theme.COLORS.RED_DARK
        };

        width: 8px;
        height: 8px;
        border-radius: 50px;
        align-self:center;
    `}
`;