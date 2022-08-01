import React from 'react';
import { Checkbox } from '@chakra-ui/react';

const CheckboxElement = ({ id, label, defaultValue }) => {
  return <Checkbox id={id}>{label}</Checkbox>;
};

export default CheckboxElement;
