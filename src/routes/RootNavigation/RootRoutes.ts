import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppParamsList } from "@routes/NavigationScreensParamsList/AppParamsList";
import { AuthParamsList } from "@routes/NavigationScreensParamsList/AuthParamsList";

export type AppRootRoutes = NativeStackNavigationProp<AppParamsList>;
export type AuthRootRoutes = NativeStackNavigationProp<AuthParamsList>;