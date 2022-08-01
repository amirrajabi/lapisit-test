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
  value,
  saveData,
}) => {
  const { handleChange } = useContext(FormContext);

  return (
    <FormControl isRequired={required} pb={2}>
      <FormLabel>{label}</FormLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        value={value}
        defaultValue={saveData[id] !== null ? saveData[id] : null}
        onChange={(event) => handleChange(id, event)}
        onBlur={(event) => handleChange(id, event)}
      />

      {saveData[id] === '' ? (
        <FormHelperText color='red.400'>
          This field is required!.
        </FormHelperText>
      ) : null}
    </FormControl>
  );
};

export default InputElement;
