import styled, { css } from "styled-components/native";

export type DotTypeStyleProps = 'YES' | 'NO';
export type DotActiveStyleProps = boolean;

type Props = {
    type: DotTypeStyleProps;
    active: DotActiveStyleProps;
}

export const Container = styled.TouchableOpacity<Props>`
    ${({ theme, active, type }) => css`
        flex: 1;
        flex-direction: row;

        align-items: center;
        justify-content: center;

        background-color: ${
            type === "YES" && active ? theme.COLORS.GREEN_LIGHT :
            type === "NO" && active ? theme.COLORS.RED_LIGHT :  
            theme.COLORS.GRAY_6
        };

        border: 1px solid ${
            type === "YES" && active ? theme.COLORS.GREEN_DARK :
            type === "NO" && active ? theme.COLORS.RED_DARK :  
            theme.COLORS.GRAY_6
        };

        max-height: 50px;
        min-height: 50px;

        border-radius: 5px;
    `}
`;

export const Dot = styled.View<Props>`
    ${({ theme, type }) => css`
        background-color: ${type === 'YES' ? theme.COLORS.GREEN_DARK
            : theme.COLORS.RED_DARK
        };

        width: 8px
        height: 8px;
        border-radius: 50px;
    `}
`;

export const Label = styled.Text`
    ${({ theme }) => css`
            color: ${theme.COLORS.GRAY_2};
            font-family: ${theme.FONT_FAMILY.BOLD};
            font-size: ${theme.FONT_SIZE.SM};

            padding: 8px;
        };

    `}
`;