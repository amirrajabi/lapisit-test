import React from 'react';

import InputElement from './elements/InputElement';
import CheckboxElement from './elements/CheckboxElement';

const Element = ({
  field: { id, label, type, required, placeholder, defaultValue },
}) => {
  switch (type) {
    case 'text':
      return (
        <InputElement
          id={id}
          label={label}
          type={type}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      );
    case 'checkbox':
      return (
        <CheckboxElement id={id} label={label} defaultValue={defaultValue} />
      );
    default:
      return null;
  }
};

export default Element;
