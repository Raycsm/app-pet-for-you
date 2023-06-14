/* eslint-disable no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import {NativeBaseProvider} from 'native-base';
import Navigation from './src/navigation/index';
import { Provider as PaperProvider } from 'react-native-paper';
import { LogBox, Dimensions } from 'react-native';

export default function App() {

  const windowDimensions = Dimensions.get('window');
  const screenDimensions = Dimensions.get('screen');
  console.disableYellowBox = true;
  
  const [dimensions, setDimensions] = React.useState({
    window: windowDimensions,
    screen: screenDimensions,
  });
  
  React.useEffect(() => {
    const subscription = Dimensions.addEventListener(
      'change',
      ({window, screen}) => {
        setDimensions({window, screen});
      },
    );
    return () => subscription?.remove();
  });

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
