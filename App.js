import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Providers from './src/navigation';

export default function App() {
  return (
    <NativeBaseProvider>
      <Providers />
    </NativeBaseProvider>
  );
}
