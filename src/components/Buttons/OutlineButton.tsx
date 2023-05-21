/* eslint-disable prettier/prettier */
import {Button, IButtonProps, Text} from 'native-base';
import React from 'react';

type Props = IButtonProps & {
  title: string;
};

export function OutlineButtonOrange({title, ...rest}: Props) {
  return (
    <Button
      w="full"
      variant="outline"
      borderColor={'#DB652F'}
      borderRadius={20}
      _pressed={{
        bgColor: '#f7dcd0',
      }}
      {...rest}>
      <Text fontSize={16} color={'#DB652F'}>
        {title}
      </Text>
    </Button>
  );
}
