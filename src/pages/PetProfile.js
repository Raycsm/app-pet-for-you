import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function PetProfile({navigation}: any) {
  return (
    <SafeAreaView>
      <BackAction title="PetProfile" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
