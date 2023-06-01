import {Button, Icon, Text, View} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import BackAction from '../components/BackAction';

export default function AdoptionButtons({navigation}) {
  return (
    <View>
      <BackAction title="Adoção" onPress={navigation.goBack} />
      <View style={style.container}>
        <Button
          style={{borderRadius: 20, height: 100, width: 300}}
          onPress={() => navigation.navigate('CreatePet')}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={IconMaterialCommunityIcons} name="dog" size="3xl" />}>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Criar Pet
          </Text>
        </Button>

        <Button
          style={{borderRadius: 20, height: 100, width: 300, marginTop: 40}}
          onPress={() => navigation.navigate('MyPets')}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={IconMaterialCommunityIcons} name="cat" size="3xl" />}>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Meus Pets
          </Text>
        </Button>

        <Button
          style={{borderRadius: 20, height: 100, width: 300, marginTop: 40}}
          onPress={() => navigation.navigate('Favorites')}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={IconMaterialCommunityIcons} name="heart" size="3xl" />}>
          <Text fontSize={20} color={'white'} marginLeft={2}>
            Pets favoritos
          </Text>
        </Button>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 40,
    alignSelf: 'center'
  }
});
