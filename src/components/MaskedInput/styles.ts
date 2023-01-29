import { TextInput, TextInputProps } from "react-native";
import styled, { css } from "styled-components/native";
import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";


export const Container = styled.View`
    flex: 1;
    
    align-self: stretch;

`;

export const Label = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM};
        color: ${theme.COLORS.GRAY_2};
    `};
`;

export const InputField = styled(MaskedTextInput).attrs<MaskedTextInputProps>(({multiline}) => ({
    selectionColor:'black',
    textAlignVertical: multiline === true ? 'top': 'center',
}))<MaskedTextInputProps>`
    ${({ theme }) => css`
        padding: 14px;
        border-radius: 6px;
        border: ${theme.COLORS.GRAY_5};

        font-family: ${theme.FONT_FAMILY.REGULAR};
        font-size: ${theme.FONT_SIZE.MD};
        color: ${theme.COLORS.GRAY_2};
    `}
    padding: 14px;
        border-radius: 6px;
    ${({multiline}) => multiline ? `height: 140px`: ''};
`;