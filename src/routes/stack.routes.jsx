import { createNativeStackNavigator } from "@react-navigation/native-stack";

const {Screen, Navigator} = createNativeStackNavigator();

// screens
import { Login } from "../screens/Login";
import { Register } from "../screens/Register"
import { Home } from "../screens/Home";

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
                name="Register"
                component={Register}
            />

            <Screen 
                name="Home"
                component={Home}
            />
        </Navigator>
    )
}