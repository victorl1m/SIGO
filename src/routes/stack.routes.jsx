import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();

// screens

import { Login } from "../screens/Login";
import { Register } from "../screens/Register";
import { Home } from "../screens/Home";
import { Profile } from "../screens/Profile"; 
import { ForgotPW } from "../screens/ForgotPW";
import { ClientSelection } from "../screens/ClientSelection";

// routes
export function StackRoutes() {
  return (
    <Navigator>
       <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
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
          headerShown: false,
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
