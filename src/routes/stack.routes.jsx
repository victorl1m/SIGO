import {createNativeStackNavigator} from '@react-navigation/native-stack';

const {Screen, Navigator} = createNativeStackNavigator();

// screens

import {Login} from '../screens/Login';
import {Register} from '../screens/Register';
import {Home} from '../screens/Home';
import {Profile} from '../screens/Profile';
import {ForgotPW} from '../screens/ForgotPW';
import {CustomerSelection} from '../screens/CustomerSelection';
import {AddCustomer} from '../screens/AddCustomer';

// routes
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 300,
      }}>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CustomerSelection"
        component={CustomerSelection}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#AAAAAA',
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
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{
          gestureDirection: 'horizontal',
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#AAAAAA',
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
