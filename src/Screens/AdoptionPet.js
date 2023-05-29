/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Button, View, Icon, Text} from 'native-base';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackAction from '../components/BackAction';
import {ROUTES} from '../Constants';

export default function AdoptionButtons({navigation}) {
  return (
    <View>
      <BackAction title="Adoção" onPress={navigation.goBack} />
      <View style={style.container}>
        <Button
          style={{borderRadius: 20, height: 100, width: 300}}
          onPress={() => navigation.navigate(ROUTES.CREATE_PET)}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={IconMaterialCommunityIcons} name="dog" size="3xl" />}>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Criar Pet
          </Text>
        </Button>

        <Button
          style={{borderRadius: 20, height: 100, width: 300, marginTop: 40}}
          onPress={() => navigation.navigate(ROUTES.MY_PETS)}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={IconMaterialCommunityIcons} name="cat" size="3xl" />}>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Meus Pets
          </Text>
        </Button>

        <Button
          style={{borderRadius: 20, height: 100, width: 300, marginTop: 40}}
          onPress={() => navigation.navigate(ROUTES.MY_APPLICATIONS)}
          backgroundColor={'#DB652F'}
          leftIcon={
            <Icon as={IconMaterialCommunityIcons} name="rabbit" size="3xl" />
          }>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Minhas Candidaturas
          </Text>
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 80,
    alignSelf: 'center',
  },
});
