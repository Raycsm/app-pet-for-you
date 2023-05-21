/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'native-base';

export function Title({children, style}) {
  return (
    <View>
      <Text
        style={style}
        bold
        color={'#434242'}
        fontSize={25}
        alignSelf={'center'}>
        {children}
      </Text>
    </View>
  );
}
