import React from 'react';

import InputElement from './elements/InputElement';
import CheckboxElement from './elements/CheckboxElement';

const Element = ({
  field: { id, label, type, required, placeholder, value },
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
          value={value}
        />
      );
    case 'email':
      return (
        <InputElement
          id={id}
          label={label}
          type={type}
          required={required}
          placeholder={placeholder}
          value={value}
        />
      );
    case 'checkbox':
      return <CheckboxElement id={id} label={label} value={value} />;
    default:
      return null;
  }
};

export default Element;
