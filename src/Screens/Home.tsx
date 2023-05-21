/* eslint-disable eslint-comments/no-unused-disable */

/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Foundations from 'react-native-vector-icons/Foundation';
import { Button, Icon } from 'native-base';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import Carrousel from '../components/Carrousel/carrousel';
import {TextGrey} from '../components/TextGrey';
import auth from '@react-native-firebase/auth';

const images = [
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_cat.jpg?alt=media&token=efac84f3-96b7-44c8-8cea-b5003f7546a5',
  'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/Banners%2Fbanner_dog.jpg?alt=media&token=2a579fc8-c108-41b8-8e41-92eb678495f2',
];

export default function Home() {

  function signOutAuth() {
    auth().signOut();
  }
  
  return (
    <View>
      <View style={style.containerHeader}>

        <Button
          style={style.filter}
          onPress={signOutAuth}
          backgroundColor={'#DB652F'}
          rightIcon={<Icon as={Foundations} name="filter" size="xl" />}
        />

        <Image
          style={style.logo_home}
          source={{
            uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/logo.png?alt=media&token=ed7ba77b-b2f7-4349-ad3c-34abbd26f5bb',
          }}
        />

        <Button
          style={style.exit}
          onPress={() => signOutAuth}
          backgroundColor={'#DB652F'}
          leftIcon={<Icon as={Ionicons} name="ios-exit" size="xl" />}
        />
      </View>

      <Carrousel images={images} />

        <TextGrey style={style.text}>
          Pets perto de você
        </TextGrey>

    </View>
  );
}

const style = StyleSheet.create({
  containerHeader: {
    flexDirection: 'row',
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
    marginTop: 50,
  },
  exit: {
    width: 40,
    height: 40,
    marginLeft: 60,
    marginTop: 60,
    backgroundColor:'#DB652F',
    borderRadius:5,
  },
  filter: {
    marginLeft: 30,
    marginTop: 60,
    width: 40,
    height: 40,
    borderRadius:5,
  },
});
