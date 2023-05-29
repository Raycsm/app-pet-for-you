/* eslint-disable prettier/prettier */
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ROUTES } from '../../Constants';
import { AboutUs, Adoption, Favorites, Home, Profile } from '../../pages';
/;

const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.ABOUTUS} component={AboutUs} />
      <Stack.Screen name={ROUTES.FAVORITES} component={Favorites} />
      <Stack.Screen name={ROUTES.ADOPTION} component={Adoption} />
    </Stack.Navigator>
  );
}
