import { useState, useEffect } from 'react';
import { Heading } from '@chakra-ui/react';

import Element from './Element';
import { FormContext } from '../FormContext';

function Section({ schema, levelId, updateFielde }) {
  const [elements, setElements] = useState(null);
  const { fields, label } = elements ?? {};

  useEffect(() => {
    setElements(schema[levelId]);
  }, [schema, levelId]);

  useEffect(() => {
    updateFielde(fields ? fields : null);
  }, [updateFielde, fields]);

  const handleChange = (idField, event) => {
    const newElements = { ...elements };
    newElements.fields.forEach((field) => {
      const { id, type } = field;
      if (id === idField) {
        switch (type) {
          case 'checkbox':
            field['value'] = event.target.checked;
            break;
          default:
            field['value'] = event.target.value;
            break;
        }
      }
      setElements(newElements);
    });
  };

  return (
    <FormContext.Provider value={{ handleChange }}>
      <Heading as='h2' size='xl'>
        {label}
      </Heading>
      {fields
        ? fields.map((field, i) => <Element key={i} field={field} />)
        : null}
    </FormContext.Provider>
  );
}

export default Section;
