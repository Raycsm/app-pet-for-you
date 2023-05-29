import React from 'react';
import {SafeAreaView} from 'react-native';
import BackAction from '../components/BackAction';

export default function FavoritesPets({navigation}: any) {
  return (
    <SafeAreaView>
      <BackAction title="Pets Favoritos" onPress={navigation.goBack} />
    </SafeAreaView>
  );
}
