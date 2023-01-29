import { FeedbackRouteParams } from "@screens/Feedback";
import { MealInfoRouteParams } from "@screens/MealInfo";
import { RegisterRouteParams } from "@screens/Register";
import { StatisticsRouteParams } from "@screens/Statistics";

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            Home: undefined;
            Feedback: FeedbackRouteParams;
            MealInfo: MealInfoRouteParams;
            Register: RegisterRouteParams;
            Statistics: StatisticsRouteParams;
        }
    }
}