import { Dot } from "@components/Dot";
import { Container, Label } from "./styles";

type Props = {
    isOnDiet: boolean
}

export function Tag({ isOnDiet }: Props) {
    return (
        <Container>
            <Dot isOnDiet={isOnDiet} />
            <Label>Dentro da dieta</Label>
        </Container>
    );
}