
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { ForgotPassword, Login, SignUp } from '../../pages';

const Stack = createNativeStackNavigator();

export default function AuthNavigation() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false }} />
      <Stack.Screen
        name='forgotPassword'
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
