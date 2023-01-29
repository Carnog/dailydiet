import { useState } from "react";
import { TouchableOpacityProps } from "react-native";


import { ButtonTypeStyleProps, Container, PencilIcon, PlusIcon, Title, TrashIcon } from "./styles";

type Props = TouchableOpacityProps & {
    title: string;
    type?: ButtonTypeStyleProps;
    icon?: 'none' | 'plus' | 'pencil' | 'trash';
}

export function Button({ title, type = 'PRIMARY', icon = 'none', ...rest }: Props) {
    const [isPressed, setIsPressed] = useState(false);

    return (
        <Container type={type}
            onPress={() => { }}
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            isPressed={isPressed}
            {...rest}
        >
            { icon === 'plus' && <PlusIcon type={type} />}
            { icon === 'pencil' && <PencilIcon type={type} />}
            { icon === 'trash' && <TrashIcon type={type} />}
            <Title type={type}> {title} </Title>
        </Container>
    );
}