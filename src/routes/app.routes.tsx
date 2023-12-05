import * as React from 'react';
import * as screens from '@app/app-screens';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppParamsList } from './NavigationScreensParamsList/AppParamsList';

const RootAppRoutes = createNativeStackNavigator<AppParamsList>();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <RootAppRoutes.Navigator
        initialRouteName='products'
        screenOptions={ { headerShown: false } }
      >
        <RootAppRoutes.Screen name='products' component={screens.Products} />
        <RootAppRoutes.Screen name='details' component={screens.Details} />
        <RootAppRoutes.Screen name='profile' component={screens.Profile} />
        
      </RootAppRoutes.Navigator>
    </NavigationContainer>
  );
}