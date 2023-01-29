import { Header } from "@components/Header";
import { MealForm } from "@components/MealForm";
import { useRoute } from "@react-navigation/native";

import { MealType } from "@storage/meals/mealsDAO";

import { Container } from "./styles";

export type RegisterRouteParams = {
    edit?: boolean,
    meal?: MealType,
}

export function Register() {
    const route = useRoute();
    const { edit = false, meal } = route.params as RegisterRouteParams;

    return (
        <Container>
            <Header
                title={edit ? "Editar Refeição" : "Nova refeição"}
                type="NEUTRAL"
            />
            <MealForm meal={meal} edit={edit}/>
        </Container>
    );
}