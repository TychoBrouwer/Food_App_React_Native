import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import reducer component
import GlobalState, { reducer } from './components/global-state';

// imports for the screens
import LoadingScreen from './screens/splash';
import SignInScreen from './screens/sign-in';
import SignUpScreen from './screens/sign-up';
import HomeScreen from './screens/home';

// initial values for locally stored values
const initialState = {
  credentials: null,
};

// stack for navigating between screens
const Stack = createNativeStackNavigator();

// main aoo function
export default function App() {
  // setting up th reducer for accessing the locally stored values
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalState initialState={state} dispatch={dispatch}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            animation: 'none',
          }}
        >
          <Stack.Screen
            name="Splash"
            component={LoadingScreen}
          />
          <Stack.Screen
            name="SignIn"
            component={SignInScreen}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpScreen}
          />
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalState>
  );
}
