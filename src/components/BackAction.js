/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default function BackAction({title, onPress}) {
  return (
    <Appbar.Header style={style.appbar}>
      <Appbar.BackAction color="#4A4A4A" onPress={onPress} />
      <Appbar.Content
        title={title}
        color="#4A4A4A"
        style={{alignItems: 'center', marginRight: 35}}
      />
    </Appbar.Header>
  );
}

const style = StyleSheet.create({
  appbar: {
    shadowColor: '#000',
    backgroundColor: 'white',
    height: 45,
    marginBottom: 18
  }
});
