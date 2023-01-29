import { InfoCard } from "@components/InfoCard";
import { Container, Title, Row } from "./styles";

type Props = {
    mealsTotal: number,
    mealsOnDietCount: number,
    maxOnDietStreak: number
}

export function InfoData({ mealsTotal, mealsOnDietCount, maxOnDietStreak }: Props) {
    return (
        <>
            <Container>
                <Title>Estatísticas Gerais</Title>
                <Row>
                    <InfoCard value={maxOnDietStreak.toString()} label="melhor sequência de pratos dentro da dieta" />
                </Row>
                <Row>
                    <InfoCard value={mealsTotal.toString()} label="refeições registradas" />
                </Row>

                <Row>
                    <InfoCard value={mealsOnDietCount.toString()} label="refeições dentro da dieta" type="PRIMARY" />
                    <InfoCard value={(mealsTotal - mealsOnDietCount).toString()} label="refeições fora da dieta" type="SECONDARY" />
                </Row>

            </Container>
        </>
    );
}