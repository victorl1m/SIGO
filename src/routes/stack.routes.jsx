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
  const config = {
    animation: 'timing',
  };

  return (
    <Navigator>
      <Screen
        name="CustomerSelection"
        component={CustomerSelection}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: true,
        }}
      />
      <Screen
        name="Login"
        component={Login}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Profile"
        component={Profile}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
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
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          headerShown: false,
        }}
      />
      <Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{
          gestureDirection: 'horizontal',
          transitionSpec: {
            open: config,
            close: config,
          },
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: '#AAAAAA',
        }}
      />
    </Navigator>
  );
}
