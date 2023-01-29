import { MealType } from "@storage/meals/mealsDAO";

export function sortReverseStringDate(a: string, b: string) {
    a = a.split('/').reverse().join('');
    b = b.split('/').reverse().join('');
    return a < b ? 1 : a > b ? -1 : 0;
}

export function sortReverseStringTime(a: MealType, b: MealType) {
    const aTime = a.time.split(':').join('');
    const bTime = b.time.split(':').join('');
    return aTime < bTime ? 1 : aTime > bTime ? -1 : 0;
}