import * as React from 'react';
import * as screens from '@auth/auth-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthParamsList } from './NavigationScreensParamsList/AuthParamsList';

const RootAuthRoutes = createNativeStackNavigator<AuthParamsList>();

export function AuthRoutes() {
  return (
    <NavigationContainer>
      <RootAuthRoutes.Navigator
        initialRouteName='welcome'
        screenOptions={ { headerShown: false } }
      >
        <RootAuthRoutes.Screen name='login' component={screens.Login} />
        <RootAuthRoutes.Screen name='signIn' component={screens.SignIn} />
        <RootAuthRoutes.Screen name='welcome' component={screens.Welcome} />
        
      </RootAuthRoutes.Navigator>
    </NavigationContainer>
  );
}