import React, { useContext } from 'react';
import { Checkbox } from '@chakra-ui/react';

import { FormContext } from '../../FormContext';

const CheckboxElement = ({ id, label, value }) => {
  const { handleChange } = useContext(FormContext);
  return (
    <Checkbox
      id={id}
      checked={value}
      onChange={(event) => handleChange(id, event)}
    >
      {label}
    </Checkbox>
  );
};

export default CheckboxElement;
