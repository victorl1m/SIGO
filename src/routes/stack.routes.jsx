import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import { Login } from "../screens/Login";
import { Register } from "../screens/Register"
import { Home } from "../screens/Home";
import { ForgotPW } from "../screens/ForgotPW";

// routes
export function StackRoutes() {
    return (
        <Navigator>
            <Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />

            <Screen 
                name="ForgotPW"
                component={ForgotPW}
                options={{
                    headerShown: false
                }}
            />

            <Screen 
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />

            <Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
        </Navigator>
    )
}