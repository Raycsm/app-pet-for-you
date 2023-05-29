import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function PetApplications({navigation}) {
  return (
    <SafeAreaView>
      <BackAction title="PetApplications" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
