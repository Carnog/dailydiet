import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feedback } from "@screens/Feedback";

import Home from "@screens/Home";
import { MealInfo } from "@screens/MealInfo";
import { Register } from "@screens/Register";
import { Statistics } from "@screens/Statistics";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="Home"
        >
            <Screen name="Home" component={Home} />
            <Screen name="Feedback" component={Feedback} />
            <Screen name="MealInfo" component={MealInfo} />
            <Screen name="Register" component={Register} />
            <Screen name="Statistics" component={Statistics} />
        </Navigator>
    );
}