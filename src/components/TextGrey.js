import {Text, View} from 'native-base';
import React from 'react';

export function TextGrey({children, style}) {
  return (
    <View>
      <Text style={style} bold color="#434242">
        {children}
      </Text>
    </View>
  );
}
