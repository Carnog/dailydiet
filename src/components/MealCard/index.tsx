import { MealType } from "@storage/meals/mealsDAO";
import { TouchableOpacityProps } from "react-native";

import { Circle, Container, Name, Time, VerticalDivider } from "./styles";

type Props = TouchableOpacityProps & {
    meal: MealType
}

export function MealCard({ meal, ...rest }: Props) {
    return (
        <Container {...rest}>
            <Time>{meal.time}</Time>
            <VerticalDivider />
            <Name numberOfLines={1}>{meal.name}</Name>
            <Circle isOnDiet={meal.isOnDiet}/>
        </Container>
    );
}