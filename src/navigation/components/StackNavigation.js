
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AboutUs, CreatePet, MyPets, Home, Profile } from '../../pages';


const Stack = createNativeStackNavigator();

export function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Profile'} component={Profile} />
      <Stack.Screen name={'AboutUs'} component={AboutUs} />
      <Stack.Screen name={'MyPets'} component={MyPets} />
      <Stack.Screen name={'CreatePet'} component={CreatePet} />
    </Stack.Navigator>
  );
}
