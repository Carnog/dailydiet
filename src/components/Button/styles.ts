import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';


type Props = {
    type?: ButtonTypeStyleProps,
    isPressed?: boolean
}

export const Container = styled(TouchableOpacity) <Props>`
    flex: 1;
    flex-direction: row;

    padding: 0px 24px;

    min-height: 50px;
    max-height: 50px;

    ${({ theme, type, isPressed }) => css`
    border: 1px solid ${theme.COLORS.GRAY_2};
    background-color: ${type === "PRIMARY" && !isPressed ? theme.COLORS.GRAY_2 :
            type === "PRIMARY" && isPressed ? theme.COLORS.GRAY_1 :
                type === "SECONDARY" && !isPressed ? theme.COLORS.WHITE : theme.COLORS.GRAY_5};
    `}
    
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text<Props>`
    ${({ theme, type }) => css`
        font-size: ${theme.FONT_SIZE.MD};
        font-family: ${theme.FONT_FAMILY.BOLD};
         ${type === 'PRIMARY' ?
            `color:${theme.COLORS.WHITE};` :
            `color:${theme.COLORS.GRAY_2};`
        }
    `}
`;

export const PencilIcon = styled(PencilSimpleLine).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === "PRIMARY" ? theme.COLORS.WHITE : theme.COLORS.GRAY_2
})) <Props>`
    margin-right: 12px;
`;


export const PlusIcon = styled(Plus).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2
})) <Props>`
    margin-right: 12px;
`;

export const TrashIcon = styled(Trash).attrs<Props>(({ theme, type }) => ({
    size: 18,
    color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_2
})) <Props>`
    margin-right: 12px;
`;

