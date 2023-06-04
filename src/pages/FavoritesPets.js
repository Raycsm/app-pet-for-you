import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function FavoritesPets({navigation}) {
  return (
    <SafeAreaView>
      <BackAction title="Editar Pet" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
