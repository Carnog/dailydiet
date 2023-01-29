import { useState } from "react";
import { Modal, Text, View, StyleSheet } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Button } from "@components/Button";
import { Gap } from "@components/Gap";
import { Header } from "@components/Header";
import { MealForm } from "@components/MealForm";
import { PushGap } from "@components/PushGap";
import { Tag } from "@components/Tag";

import { mealDelete, MealType } from "@storage/meals/mealsDAO";

import { Container, DateTime, Description, MealData, ModalCard, ModalContainer, ModalTitle, Name, Row, VerticalGap } from "./styles";

export type MealInfoRouteParams = {
    meal: MealType
}

export function MealInfo() {
    const route = useRoute();
    const { meal } = route.params as MealInfoRouteParams;

    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);

    function handleEdit() {
        navigation.navigate('Register', { meal, edit: true })
    }

    function handleCancel() {
        setModalVisible(false);
    }

    async function handleDelete() {
        await mealDelete(meal);
        navigation.navigate('Home');
    }

    return (
        <Container isOnDiet={meal.isOnDiet}>
            <Header title="Refeição" type={meal.isOnDiet ? 'PRIMARY' : 'SECONDARY'} />
            <MealData>
                <Name>{meal.name}</Name>
                <Description>{meal.description}</Description>
                <DateTime>Data e hora</DateTime>
                <Description>{meal.date} às {meal.time}</Description>

                <Tag isOnDiet={meal.isOnDiet} />

                <PushGap />
                <Button title="Editar Refeição" type="PRIMARY" icon="pencil" onPress={handleEdit} />
                <VerticalGap />
                <Button title="Excluir Refeição" type="SECONDARY" icon="trash" onPress={() => setModalVisible(true)} />
            </MealData>

            <Modal
                style={styles.modal}
                animationType="fade"
                statusBarTranslucent
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}>
                <ModalContainer >
                    <ModalCard >
                        <ModalTitle >Deseja realmente excluir o registro da refeição?</ModalTitle>
                        <Row>
                            <Button title="Cancelar" type="SECONDARY" onPress={handleCancel} />
                            <Gap x={4} y={0} />
                            <Button title="Sim, excluir" onPress={handleDelete} />
                        </Row>
                    </ModalCard>
                </ModalContainer>
            </Modal>

        </Container>
    );
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        width: '100%',

        alignContent: 'center',
        justifyContent: 'center',

        backgroundColor: 'rgba(0,0,0,0.5)',

    }
})