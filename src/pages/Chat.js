import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function Chat({navigation}) {
  return (
    <SafeAreaView>
      <BackAction title="Chat" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
