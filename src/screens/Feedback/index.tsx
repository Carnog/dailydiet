import { useNavigation, useRoute } from "@react-navigation/native";

import positiveImg from "@assets/Positive.png";
import negativeImg from "@assets/Negative.png";

import { B, Container, Img, Title, Subtitle } from "./styles";
import { Button } from "@components/Button";

export type FeedbackRouteParams = {
    isOnDiet: boolean;
}

export function Feedback() {

    const route = useRoute();
    const { isOnDiet } = route.params as FeedbackRouteParams;

    const navigation = useNavigation();

    function handleGoBack() {
        navigation.navigate("Home");
    }

    return (
        <Container>
            <Title isOnDiet={isOnDiet}>
                {isOnDiet ? 'Continue assim!' : 'Que pena!'}
            </Title>
            {isOnDiet ?
                <Subtitle>
                    Você continua <B>dentro da dieta</B>. Muito bem!
                </Subtitle>
                :
                <Subtitle>
                    Você <B>saiu da dieta</B> dessa vez, mas continue se esforçando e não desista!
                </Subtitle>
            }

            <Img source={isOnDiet ? positiveImg : negativeImg} />

            <Button title="Ir para a página inicial" onPress={handleGoBack}/>
        </Container>
    );
}