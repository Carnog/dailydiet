import { useNavigation } from "@react-navigation/native";
import { Container, Title, HeaderTypeStyleProp, BackIcon, BackButton } from "./styles";

type Props = {
    title: string
    type?: HeaderTypeStyleProp,
}

export function Header({ title, type = "NEUTRAL" }: Props) {
    const navigation = useNavigation();

    function handleGoHome() {
        navigation.navigate('Home');
    }

    return (
        <Container type={type}>
            <BackButton onPress={handleGoHome}>
                <BackIcon type={type} />
            </BackButton>
            <Title>{title}</Title>
        </Container>
    );
}