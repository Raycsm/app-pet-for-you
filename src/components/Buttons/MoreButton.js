/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';

export function MoreButton({focused, size}) {
  return (
    <View style={[styles.container, {backgroundColor: focused ? '#c94e15' : '#DB652F'}]}>
      <Icon name="paw" color={focused ? '#fff' : '#fff'} size={size} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40
  }
});
