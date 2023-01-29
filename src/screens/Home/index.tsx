import { useCallback, useState } from "react";
import { Alert, FlatList, Text } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import logoImg from "@assets/Logo.png";
import userImg from "@assets/UserImg.png";

import { Container, HomeHeader, Logo, Title, UserImg } from "./styles";
import { Percent } from '@components/Percent';
import { Button } from '@components/Button';
import { Loading } from "@components/Loading";

import { mealGetAll, MealStorageType, MealType } from "@storage/meals/mealsDAO";
import { MealCard } from "@components/MealCard";
import { sortReverseStringDate, sortReverseStringTime } from "@utils/sorting";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [days, setDays] = useState(['']);
  const [meals, setMeals] = useState<MealStorageType>({});

  const [percent, setPercent] = useState(0.0);
  const [mealsTotal, setMealsTotal] = useState(0);
  const [mealsOnDietCount, setMealsOnDietCount] = useState(0);

  const [maxOnDietStreak, setMaxOnDietStreak] = useState(0);

  const navigation = useNavigation();



  async function fetchMeals() {
    try {
      setIsLoading(true);
      const storage = await mealGetAll();
      calculatePercentage(storage);
      setMeals(storage);

      const keyDays = Object.keys(storage);
      keyDays.sort(sortReverseStringDate);
      setDays(keyDays);

    } catch (error) {
      Alert.alert('Refeições', 'Não foi possivel carregar as refeições.');
      console.log('Error fetching meals');
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function calculatePercentage(allMeals: MealStorageType) {
    let meals: MealType[] = [];
    let totalMeals = 0;
    let mealsOnDiet = 0;

    let maxStreak = 0;
    let streak = 0;

    // sort days on backwards
    const days = Object.keys(allMeals).sort(sortReverseStringDate);
    days.forEach((day, index) => {
      totalMeals += allMeals[day].length;

      // for each day, retrieve the meals and sort backwards in time
      let mealsOfDayToIterate = allMeals[day].sort(sortReverseStringTime);
      for (let i = 0; i < mealsOfDayToIterate.length; i++) {
        // if isOnDiet increment streak, else reset it
        if (mealsOfDayToIterate[i].isOnDiet) {
          mealsOnDiet += 1;
          streak += 1;
          if (streak >= maxStreak) maxStreak = streak;
        } else {
          streak = 0;
        }
      }

    });

    setMealsTotal(totalMeals);
    setMealsOnDietCount(mealsOnDiet);

    const percentageCalc = (mealsOnDiet / totalMeals) * 100;
    setPercent(percentageCalc);
    setMaxOnDietStreak(maxStreak);
  }

  function handleNewMeal() {
    navigation.navigate("Register", {});
  }

  function handleMealPress(meal: MealType) {
    navigation.navigate("MealInfo", { meal });
  }

  function handleSeeInfo() {
    navigation.navigate('Statistics', { percent, mealsOnDietCount, mealsTotal, maxOnDietStreak });
  }

  useFocusEffect(useCallback(() => {
    fetchMeals();
  }, []))

  return (
    <Container >
      <HomeHeader>
        <Logo source={logoImg} />
        <UserImg source={userImg} />
      </HomeHeader>

      <Percent
        amount={percent.toFixed(2)}
        subtitle='das refeições dentro da dieta'
        type={percent < 60 ? 'SECONDARY' : 'PRIMARY'}
        onPress={() => { handleSeeInfo() }}
      />
      <Title>Refeições</Title>
      <Button title='Nova refeição' type='PRIMARY' icon="plus" onPress={handleNewMeal} />

      {
        isLoading ?
          <Loading />
          :
          <FlatList
            data={days}
            renderItem={({ item }) => {
              const mealsOfDay = meals[item];
              mealsOfDay.sort(sortReverseStringTime);
              return (
                <>
                  <Title>{item}</Title>
                  <FlatList
                    data={mealsOfDay}
                    renderItem={({ item }) => (
                      <MealCard
                        meal={item}
                        onPress={() => handleMealPress(item)}
                      />
                    )}
                  />
                </>
              )
            }}
          />
      }

    </Container>
  );
}