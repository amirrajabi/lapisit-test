import React from 'react';
import { FormLabel, FormHelperText, Input } from '@chakra-ui/react';

const InputElement = ({
  id,
  label,
  type,
  required,
  placeholder,
  defaultValue,
}) => {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        value={defaultValue}
      />
      {required ? (
        <FormHelperText>This field is required!</FormHelperText>
      ) : null}
    </>
  );
};

export default InputElement;
