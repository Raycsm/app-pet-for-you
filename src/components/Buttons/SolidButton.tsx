/* eslint-disable prettier/prettier */
import {Button, IButtonProps, Text} from 'native-base';
import React from 'react';

type Props = IButtonProps & {
  title: string;
};

export function SolidButton({title, ...rest}: Props) {
  return (
    <Button
      w="full"
      bg={'#DB652F'}
      variant="rounded"
      borderRadius={20}
      _pressed={{
        bgColor: '#cb5017',
      }}
      {...rest}>
      <Text fontSize={16} color={'white'}>
        {title}
      </Text>
    </Button>
  );
}
