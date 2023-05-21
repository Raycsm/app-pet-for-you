/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function SearchPet({navigation}: any) {
  return (
    <SafeAreaView>
      <BackAction title="SearchPet" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
