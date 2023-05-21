import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation/index';

export default function App() {
  return (
    <NativeBaseProvider>
      <Navigation />
    </NativeBaseProvider>
  );
}
