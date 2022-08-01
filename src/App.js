import { useState, useEffect } from 'react';
import {
  Container,
  Stack,
  Button,
  Heading,
  Box,
  Alert,
  AlertIcon,
  AlertDescription,
} from '@chakra-ui/react';

import formSchema from './api/formSchema.json';
import { FormContext } from './FormContext';
import Element from './components/Element';

function App() {
  const [elements, setElements] = useState([]);
  const [primaryLabel, setPrimaryLabel] = useState('');
  const [secondaryLabel, setSecondaryLabel] = useState('');
  const [secondaryShow, setSecondaryShow] = useState(false);
  const [submitValidate, setSubmitValidate] = useState(false);
  const [saveData, setSaveData] = useState({
    primaryContactName: null,
    secondaryContactName: null,
    primaryContactEmail: null,
    primaryContactPhone: null,
    primaryContactAddress: null,
  });

  const {
    primaryContactName,
    secondaryContactName,
    primaryContactEmail,
    primaryContactPhone,
    primaryContactAddress,
  } = saveData;

  const primarySection = formSchema.sections[0].fields;
  const secondarySection = formSchema.sections[1].fields;
  const mainSection = primarySection.length + 1;
  const retrievedObject = localStorage.getItem('sampleForm');

  useEffect(() => {
    setPrimaryLabel(formSchema.sections[0].label);
    setSecondaryLabel(formSchema.sections[1].label);
    setElements(primarySection.concat(secondarySection));
    setSaveData(JSON.parse(retrievedObject));
  }, [primarySection, secondarySection, retrievedObject]);

  useEffect(() => {
    setSaveData(retrievedObject ? JSON.parse(retrievedObject) : {});
  }, [retrievedObject]);

  const handleChange = (idField, event) => {
    const newElements = elements;

    newElements.forEach((field) => {
      const { id, type } = field;
      if (id === idField) {
        switch (type) {
          case 'checkbox':
            field['value'] = event.target.checked;
            setSecondaryShow(!secondaryShow);
            break;
          default:
            field['value'] = event.target.value;
            setSaveData({ ...saveData, [`${idField}`]: event.target.value });
            break;
        }
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      primaryContactName === '' ||
      secondaryContactName === '' ||
      primaryContactEmail === '' ||
      primaryContactPhone === '' ||
      primaryContactAddress === ''
    ) {
      setSubmitValidate(true);
    } else {
      setSubmitValidate(false);
      localStorage.setItem('sampleForm', JSON.stringify(saveData));
    }
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
                        <Element
                          key={field.id}
                          field={field}
                          saveData={saveData}
                        />
                      </Box>
                    );
                  } else if (i !== mainSection) {
                    return (
                      <Element key={i} field={field} saveData={saveData} />
                    );
                  } else {
                    return null;
                  }
                })
              : null}
            {submitValidate ? (
              <Box pt={8}>
                <Alert status='error'>
                  <AlertIcon />
                  <AlertDescription>
                    Please complete the form correctly!
                  </AlertDescription>
                </Alert>
              </Box>
            ) : null}
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
