import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
    width: wp('70%'),
    height: hp('20%')
  }
});
