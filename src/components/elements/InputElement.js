import React, { useContext } from 'react';
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
} from '@chakra-ui/react';

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
    <FormControl isRequired={required} pb={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        value={defaultValue}
        onChange={(event) => handleChange(id, event)}
      />
      {false ? <FormHelperText>Required!</FormHelperText> : null}
    </FormControl>
  );
};

export default InputElement;
