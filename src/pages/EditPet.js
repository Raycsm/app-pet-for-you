import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function EditPet({navigation}) {
  return (
    <SafeAreaView>
      <BackAction title="Editar pet" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
