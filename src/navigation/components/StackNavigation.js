
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AboutUs, Adoption, Favorites, Home, Profile } from '../../pages';


const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'AboutUs'} component={AboutUs} />
      <Stack.Screen name={'Favorites'} component={Favorites} />
      <Stack.Screen name={'Adoption'} component={Adoption} />
    </Stack.Navigator>
  );
}
