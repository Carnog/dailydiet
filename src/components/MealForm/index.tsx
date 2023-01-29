import { useCallback, useState } from "react";
import { Alert, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import moment from "moment";

import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { MaskedInput } from "@components/MaskedInput";
import { YesNoButton } from "@components/YesNoButton";
import { PushGap } from "@components/PushGap";

import { Container, Gap, Row } from "./styles";
import { mealCreate, mealGetAll, MealType, mealUpdate } from "@storage/meals/mealsDAO";

type Props = {
    meal?: MealType,
    edit: boolean
}

export function MealForm({ meal, edit }: Props) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [isOnDiet, setIsOnDiet] = useState(true);

    const [oldMeal, setOldMeal] = useState(meal);

    const navigation = useNavigation();

    async function handleSubmit() {
        const meal = {
            name,
            description,
            date,
            time,
            isOnDiet
        }

        console.log('meal', meal);

        let nameIsValid = name.trim() !== '' ? true : false;
        if (!nameIsValid) return Alert.alert('Refeição', 'Insira um Nome valido');

        let dateIsValid = moment(date, 'DD/MM/YYYY', true).isValid();
        if (!dateIsValid) return Alert.alert('Refeição', 'Insira uma Data valida');

        let timeIsValid = moment(time, 'HH:mm', true).isValid();
        if (!timeIsValid) return Alert.alert('Refeição', 'Insira uma Hora valida');

        await mealCreate(meal);

        const allMeals = await mealGetAll();
        console.log(allMeals);

        navigation.navigate("Feedback", { isOnDiet: meal.isOnDiet })
    }

    async function handleUpdate() {
        const mealToUpdate = {
            name,
            description,
            date,
            time,
            isOnDiet,
            id: meal?.id,
        }

        try {
            if (meal) {
                await mealUpdate(mealToUpdate, meal);
            }
            navigation.navigate('Home');
        } catch (error) {
            console.log(error);
            Alert.alert('Atualização', 'Não foi possivel atualizar a  refeição.');
        }
    }

    useFocusEffect(useCallback(() => {
        if (meal) {
            setDate(meal.date);
            setDescription(meal.description);
            setIsOnDiet(meal.isOnDiet);
            setName(meal.name);
            setTime(meal.time);

            setOldMeal(meal);
        } else {
            setDate(moment().format('DD/MM/YYYY'));
        }
    }, []))

    return (
        <Container>
            <Row>
                <Input
                    label="Nome"
                    onChangeText={(text) => { setName(text) }}
                    placeholder='Insira um nome para a refeição'
                    value={name}
                />
            </Row>
            <Row>
                <Input
                    onChangeText={text => {
                        setDescription(text)
                    }}
                    label="Descrição"
                    multiline
                    placeholder="Insira uma descrição para a refeição"
                    inputType="Text"
                    value={description}
                />
            </Row>
            <Row>
                <MaskedInput
                    onChangeText={(text, rawText) => {
                        setDate(text);
                    }}
                    label='Data'
                    inputType="Date"
                    value={date}
                />
                <Gap></Gap>
                <MaskedInput
                    onChangeText={(text, rawText) => {
                        setTime(text);
                    }}
                    label='Hora'
                    inputType="Time"
                    placeholder="HH:MM"
                    value={time}
                />
            </Row>
            <Text>Está dentro da dieta?</Text>
            <Row>
                <YesNoButton
                    type="YES"
                    active={isOnDiet}
                    onPress={() => setIsOnDiet(true)}
                />
                <Gap></Gap>
                <YesNoButton
                    type="NO"
                    active={!isOnDiet}
                    onPress={() => setIsOnDiet(false)}
                />
            </Row>
            <PushGap />
            {
                edit ?
                    <Button title="Salvar Alterações" onPress={() => handleUpdate()} />
                    :
                    <Button title="Cadastrar Refeição" onPress={() => handleSubmit()} />
            }
        </Container>
    );
}