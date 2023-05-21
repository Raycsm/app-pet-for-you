/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function CreatePet({navigation}: any) {
  return (
    <SafeAreaView>
      <BackAction title="Criar Pet" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
