import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation/index';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
      <NativeBaseProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </NativeBaseProvider>
  );
}
