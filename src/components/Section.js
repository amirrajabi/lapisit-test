import { useState, useEffect } from 'react';
import { Heading, Stack } from '@chakra-ui/react';

import Element from './Element';

function Section({ schema, levelId }) {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(schema[levelId]);
    console.log(schema);
  }, [schema, levelId]);

  const { fields, label } = elements ?? {};

  return (
    <>
      <Heading as='h2' size='xl'>
        {label}
      </Heading>
      {fields
        ? fields.map((field, i) => <Element key={i} field={field} />)
        : null}
    </>
  );
}

export default Section;
