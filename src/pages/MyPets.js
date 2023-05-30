import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function MyPets({navigation}) {
  return (
    <SafeAreaView>
      <BackAction title="Meus Pets" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
