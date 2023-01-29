import AsyncStorage from "@react-native-async-storage/async-storage";

import { MEALS_COLLECTION } from "@storage/storageConfig";

// this type means that i can have a variable number of keys
export type MealStorageType = {
    [day: string]: MealType[]
}

export type MealType = {
    name: string,
    description: string,
    date: string,
    time: string,
    isOnDiet: boolean,
    id?: number
}

export async function mealUpdate(newMeal: MealType, oldMeal?: MealType) {
    if (!oldMeal) {
        throw new Error("Error at meal update, oldMeal was not provided");
    }

    const storage: MealStorageType = await mealGetAll();

    const mealsOfDay = storage[oldMeal.date];

    const mealToUpdate = mealsOfDay.filter(item => item.id === oldMeal.id);

    console.log(`mealToUpdate`, mealToUpdate);

    if (mealToUpdate[0].date !== newMeal.date) {
        await mealDelete(oldMeal);
        await mealCreate(newMeal);
    } else {
        mealToUpdate[0].name = newMeal.name;
        mealToUpdate[0].description = newMeal.description;
        mealToUpdate[0].isOnDiet = newMeal.isOnDiet;
        mealToUpdate[0].time = newMeal.time;

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(storage));
    }

    console.log(`Updated storage`, storage);
}

export async function mealDelete(mealToDelete: MealType) {
    const storage: MealStorageType = await mealGetAll();

    let mealsOfDay = storage[mealToDelete.date];

    const mealsOfDayRemoved = mealsOfDay.filter(item => item.id !== mealToDelete.id);

    let newStorage = { ...storage }
    if (mealsOfDayRemoved.length > 0) {
        newStorage[mealToDelete.date] = mealsOfDayRemoved;
    } else {
        delete newStorage[mealToDelete.date];
    }

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newStorage));
}

export async function mealCreate(meal: MealType) {
    try {
        const storage: MealStorageType = await mealGetAll();


        meal.id = (new Date()).getTime();

        let mealsOfDay = storage[meal.date];
        if (mealsOfDay) {
            mealsOfDay.push(meal);
        } else {
            mealsOfDay = [meal];
        }

        let newStorage = { ...storage }
        newStorage[meal.date] = mealsOfDay;

        await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(newStorage));
    } catch (error) {
        throw error;
    }
}

export async function mealGetAll() {
    try {
        const storage = await AsyncStorage.getItem(MEALS_COLLECTION);
        const meals: MealStorageType = storage ? JSON.parse(storage) : {};

        return meals;
    } catch (error) {
        throw error;
    }
}