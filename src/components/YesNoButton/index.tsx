import { TouchableOpacityProps } from "react-native";
import { Container, Dot, DotTypeStyleProps, Label } from "./styles";

type Props = TouchableOpacityProps & {
    type: DotTypeStyleProps;
    active: boolean;
}

export function YesNoButton({ type = 'YES', active=false, ...rest }: Props) {
    return (
        <Container active={active} type={type} {...rest}>
            <Dot active={active} type={type} />
            <Label>{type === 'YES' ? 'Yes' : 'No'}</Label>
        </Container>
    );
}