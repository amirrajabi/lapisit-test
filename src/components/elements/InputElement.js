import React, { useContext } from 'react';
import { FormLabel, FormHelperText, Input } from '@chakra-ui/react';

import { FormContext } from '../../FormContext';

const InputElement = ({
  id,
  label,
  type,
  required,
  placeholder,
  defaultValue,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        value={defaultValue}
        onChange={(event) => handleChange(id, event)}
      />
      {required ? (
        <FormHelperText>This field is required!</FormHelperText>
      ) : null}
    </>
  );
};

export default InputElement;
