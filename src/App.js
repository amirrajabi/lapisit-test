import {
  Container,
  Stack,
  FormControl,
  Button,
  Divider,
} from '@chakra-ui/react';

import formSchema from './api/formSchema.json';
import Section from './components/Section';

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submit');
  };
  return (
    <Container>
      <FormControl>
        <Stack>
          <Section schema={formSchema.sections} levelId={0} />
          <Divider />
          <Section schema={formSchema.sections} levelId={1} />

          <Button
            colorScheme='teal'
            variant='solid'
            onClick={(event) => handleSubmit(event)}
          >
            Button
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
}

export default App;
