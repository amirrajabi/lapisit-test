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
  return (
    <Container>
      <FormControl>
        <Stack>
          <Section schema={formSchema.sections} levelId={0} />
          <Divider />
          <Section schema={formSchema.sections} levelId={1} />

          <Button colorScheme='teal' variant='solid'>
            Button
          </Button>
        </Stack>
      </FormControl>
    </Container>
  );
}

export default App;
