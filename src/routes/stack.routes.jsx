import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

// screens
import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Home } from "../screens/Home";
import { ForgotPW } from "../screens/ForgotPW";
import { ClientSelection } from "../screens/ClientSelection";

// routes
export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="ForgotPW"
        component={ForgotPW}
        options={{
          headerShown: false,
        }}
      />

      <Screen
        name="Register"
        component={Register}
        options={{
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#AAAAAA'
          
        }}
      />

      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      
      <Screen
        name="ClientSelection"
        component={ClientSelection}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
