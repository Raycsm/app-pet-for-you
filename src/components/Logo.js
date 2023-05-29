import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export default function Logo() {
  return (
    <View>
      <Image
        style={style.logo}
        source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/pet-for-you-8001f.appspot.com/o/logo.png?alt=media&token=ed7ba77b-b2f7-4349-ad3c-34abbd26f5bb'
        }}
      />
    </View>
  );
}

const style = StyleSheet.create({
  logo: {
    width: 160,
    height: 90,
    display: 'flex',
    alignSelf: 'center',
    marginTop: 70,
    marginBottom: 40
  }
});
