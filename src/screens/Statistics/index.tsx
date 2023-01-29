import { InfoData } from "@components/InfoData";
import { Percent } from "@components/Percent";
import { useRoute } from "@react-navigation/native";

import { Container } from "./styles";

export type StatisticsRouteParams = {
    percent: number,
    mealsTotal: number,
    mealsOnDietCount: number,
    maxOnDietStreak: number
}

export function Statistics() {
    const route = useRoute();
    const { percent, mealsTotal, mealsOnDietCount, maxOnDietStreak } = route.params as StatisticsRouteParams;


    return (
        <Container>
            <Percent
                amount={percent.toFixed(2)}
                subtitle='das refeições dentro da dieta'
                type={percent < 60 ? 'SECONDARY' : 'PRIMARY'}
                backbutton
            />
            <InfoData
                mealsOnDietCount={mealsOnDietCount}
                mealsTotal={mealsTotal}
                maxOnDietStreak={maxOnDietStreak}
            />
        </Container>
    );
}