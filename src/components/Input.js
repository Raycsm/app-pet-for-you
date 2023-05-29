/* eslint-disable prettier/prettier */
/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable keyword-spacing */
/* eslint-disable quotes */
import {Input as NativeBaseInput, IInputProps, FormControl, WarningOutlineIcon} from 'native-base';
import React from 'react';

type Props = IInputProps & {
  errorMessage?: string | null
};

export function Input({errorMessage = null, isInvalid, ...rest}: Props) {
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
      <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
