/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Foundations from 'react-native-vector-icons/Foundation';
import {Button, Text, Icon, ScrollView} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Carrousel from '../components/Carrousel/carrousel';
import {TextGrey} from '../components/TextGrey';
import auth from '@react-native-firebase/auth';
import ROUTES from '../Constants/routes';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import PetInfo from '../components/PetInfo';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_cat.jpg?alt=media&token=efac84f3-96b7-44c8-8cea-b5003f7546a5',
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_dog.jpg?alt=media&token=2a579fc8-c108-41b8-8e41-92eb678495f2'
];

const petsCategories = [
  {name: 'Gatos', icon: 'cat'},
  {name: 'Cachorros', icon: 'dog'},
  {name: 'Pássaros', icon: 'bird'},
  {name: 'Roedores', icon: 'rodent'},
  {name: 'Outros', icon: 'rabbit'}
];

export default function Home(navigation) {
  const [selectcategory, setselectCategory] = React.useState(0);

  const signOutAuth = () => {
    auth()
      .signOut()
      .then(() => {
        navigation.navigate(ROUTES.LOGIN);
      });
  };

  return (
    <View>
      <ScrollView>
        <View style={style.containerHeader}>
          <Button
            style={style.filter}
            backgroundColor={'#DB652F'}
            rightIcon={<Icon as={Foundations} name="filter" size="xl" />}
          />

          <Image
            style={style.logo_home}
            source={{
              uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/logo.png?alt=media&token=ed7ba77b-b2f7-4349-ad3c-34abbd26f5bb'
            }}
          />

          <Button
            style={style.exit}
            onPress={() => signOutAuth()}
            backgroundColor={'#DB652F'}
            leftIcon={<Icon as={Ionicons} name="ios-exit" size="xl" />}
          />
        </View>

        <Carrousel images={images} />

        <View style={style.categoryPet}>
          {petsCategories.map((item, index) => (
            <View key={'pets' + index} style={{alignItems: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  setselectCategory(index);
                }}
                style={[
                  style.buttonCategories,
                  {
                    backgroundColor: selectcategory === index ? '#DB652F' : '#a1a1a1'
                  }
                ]}>
                <Icons name={item.icon} color={'white'} size={30} />
              </TouchableOpacity>
              <Text style={style.categoryName}>{item.name}</Text>
            </View>
          ))}
        </View>

        <TextGrey style={style.text}>Pets perto de você</TextGrey>
        <View>
          <PetInfo />
        </View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row'
  },
  text: {
    marginTop: 30,
    fontSize: 20,
    textAlign: 'center',
    alignContent: 'center'
  },
  logo_home: {
    width: 100,
    height: 60,
    marginLeft: 90,
    marginTop: 50
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 60,
    marginTop: 60,
    backgroundColor: '#DB652F',
    borderRadius: 5
  },
  filter: {
    marginLeft: 30,
    marginTop: 60,
    width: 40,
    height: 40,
    borderRadius: 5
  },
  categoryPet: {
    flexDirection: 'row',
    marginLeft: 5,
    justifyContent: 'space-around',
    marginTop: 20
  },
  buttonCategories: {
    height: 45,
    width: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#DB652F'
  },
  categoryName: {
    color: 'black',
    fontSize: 12,
    marginTop: 5,
    fontWeight: 'bold'
  }
});
