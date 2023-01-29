import { Container, GapStyleProp } from "./styles";

type Props = GapStyleProp;

export function Gap({ x, y }: Props) {
    return (
        <Container x={x} y={y}>

        </Container>
    );
}