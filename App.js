import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox } from 'react-native';


export default function App() {
  console.disableYellowBox = true;
  React.useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}, [])
  LogBox.ignoreLogs(['Warning: ...']);
  return (
      <NativeBaseProvider>
        <PaperProvider>
          <Navigation />
        </PaperProvider>
      </NativeBaseProvider>
  );
}
