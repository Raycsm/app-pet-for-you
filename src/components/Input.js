import {FormControl, Input as NativeBaseInput} from 'native-base';
import React from 'react';

export function Input({errorMessage = null, isInvalid, ...rest}) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl mb={6} isInvalid={invalid}>
      <NativeBaseInput
        bg={'#dfdfdf'}
        fontSize="md"
        isInvalid={invalid}
        variant="rounded"
        _focus={{
          bg: '#f2f1f1',
          borderWidth: 2
        }}
        _invalid={{
          borderWidth: 2,
          borderColor: 'red.500'
        }}
        focusOutlineColor={'#DB652F'}
        {...rest}
      />
    </FormControl>
  );
}
