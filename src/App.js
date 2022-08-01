import { useState, useEffect } from 'react';
import { Container, Stack, Button, Heading, Box } from '@chakra-ui/react';

import formSchema from './api/formSchema.json';
import { FormContext } from './FormContext';
import Element from './components/Element';

function App() {
  const [primaryLabel, setPrimaryLabel] = useState('');
  const [secondaryLabel, setSecondaryLabel] = useState('');
  const [elements, setElements] = useState([]);
  const [secondaryShow, setSecondaryShow] = useState(false);
  const primarySection = formSchema.sections[0].fields;
  const secondarySection = formSchema.sections[1].fields;
  const mainSection = primarySection.length + 1;

  useEffect(() => {
    setPrimaryLabel(formSchema.sections[0].label);
    setSecondaryLabel(formSchema.sections[1].label);
    setElements(primarySection.concat(secondarySection));
  }, [primarySection, secondarySection]);

  const handleChange = (idField, event) => {
    const newElements = elements;

    newElements.forEach((field) => {
      const { id, type } = field;
      if (type === 'checkbox') {
        setSecondaryShow(!secondaryShow);
      }
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(elements);
  };

  return (
    <Container>
      <FormContext.Provider value={{ handleChange }}>
        <form action='Submit'>
          <Stack>
            <Heading as='h2' size='xl'>
              {primaryLabel}
            </Heading>
            {elements
              ? elements.map((field, i) => {
                  if (i === mainSection && secondaryShow) {
                    return (
                      <Box key={i} pt={6}>
                        <Heading as='h2' size='xl'>
                          {secondaryLabel}
                        </Heading>
                        <Element key={field.id} field={field} />
                      </Box>
                    );
                  } else if (i !== mainSection) {
                    return <Element key={i} field={field} />;
                  } else {
                    return null;
                  }
                })
              : null}
            <Box pt={8}>
              <Button
                colorScheme='teal'
                variant='solid'
                onClick={(event) => handleSubmit(event)}
              >
                Submit
              </Button>
            </Box>
          </Stack>
        </form>
      </FormContext.Provider>
    </Container>
  );
}

export default App;
