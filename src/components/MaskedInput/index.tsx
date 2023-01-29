import theme from "@theme/index";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { MaskedTextInput, MaskedTextInputProps } from "react-native-mask-text";
import { Container, Label } from "./styles";

type Props = MaskedTextInputProps & {
    label: string,
    inputType?: 'Text' | 'Date' | 'Time',
}

export function MaskedInput({ label, inputType = 'Text', multiline = false, ...rest }: Props) {
    const [isSelected, setIsSelected] = useState(false);

    return (
        <Container>
            <Label>{label}</Label>
            {
                <MaskedTextInput
                    {...rest}
                    onFocus={() => setIsSelected(true)}
                    onBlur={() => setIsSelected(false)}
                    cursorColor='black'
                    textAlignVertical={multiline ? 'top' : 'center'}
                    multiline={multiline}
                    keyboardType={inputType === 'Date' || inputType === 'Time' ? 'numeric' : 'default'}

                    mask={
                        inputType === 'Date' ? '99/99/9999' :
                            inputType === 'Time' ? '99:99' :
                                undefined
                    }
                    style={
                        multiline && isSelected ? { ...multilineIsSelectedStyle } :
                            multiline ? { ...multilineStyle } :
                                isSelected ? { ...isSelectedStyle } :
                                    styles.input
                    }
                />
            }
        </Container>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        padding: 14,
        borderRadius: 6,

        borderColor: theme.COLORS.GRAY_5,
        color: theme.COLORS.GRAY_2,
        fontFamily: theme.FONT_FAMILY.REGULAR,
        fontSize: Number(theme.FONT_SIZE.MD.replace('px', '')),
    },
    multline: {
        height: 140,
    },
    selected: {
        borderColor: theme.COLORS.GRAY_2,
    }
});
const multilineStyle = { ...styles.multline, ...styles.input };
const multilineIsSelectedStyle = { ...multilineStyle, ...styles.selected };
const isSelectedStyle = { ...styles.input, ...styles.selected };