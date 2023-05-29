/* eslint-disable prettier/prettier */
import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

export default function PetsImage() {
  return (
    <View>
      <Image
        style={style.pets}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/PETS.png?alt=media&token=f6fd7b20-937a-4488-8d3c-337e86192633'
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  pets: {
    display: 'flex',
    marginTop: 40,
    alignSelf: 'center',
    width: 310,
    height: 165
  }
});
