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
import {CustomerScreen} from '../screens/CustomerScreen';
import {AddJob} from '../screens/AddJob';

// routes
export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        animation: 'slide_from_right',
        animationDuration: 150,
      }}>
      <Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="CustomerScreen"
        component={CustomerScreen}
        options={{
          animation: 'slide_from_bottom',
          gestureDirection: 'horizontal',
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: 'white',
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
          animation: 'slide_from_bottom',
          gestureDirection: 'horizontal',
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: 'white',
          headerShown: true,
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
        name="AddJob"
        component={AddJob}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="AddCustomer"
        component={AddCustomer}
        options={{
          animation: 'slide_from_bottom',
          gestureDirection: 'horizontal',
          title: '',
          headerStyle: {
            backgroundColor: '#121212',
          },
          headerTintColor: 'white',
          headerShown: true,
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
