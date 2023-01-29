import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { Amount, ArrorUpButton, ArrowUpRightIcon, BackButton, BackIcon, Container, PercentTypeStyleProps, Subtitle } from "./styles";

type Props = {
    amount: string,
    subtitle: string,
    type?: PercentTypeStyleProps,
    backbutton?: boolean,
    onPress?: () => void
}

export function Percent({ amount, subtitle, type = 'PRIMARY', backbutton = false, onPress }: Props) {
    const navigation = useNavigation();

    function handleGoHome(){
        navigation.navigate('Home');
    }

    return (
        <Container type={type}>
            {backbutton ?
                <BackButton onPress={handleGoHome}>
                    <BackIcon type={type} />
                </BackButton>
                :
                <ArrorUpButton onPress={onPress}>
                    <ArrowUpRightIcon type={type} />
                </ArrorUpButton>
            }
            <Amount>{amount}%</Amount>
            <Subtitle>{subtitle}</Subtitle>
        </Container>
    );
}