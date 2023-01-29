import { Container } from "./styles";

type Props = {
    isOnDiet: boolean;
}

export function Dot({ isOnDiet }: Props) {
    return (
        <Container isOnDiet={isOnDiet}>

        </Container>
    );
}