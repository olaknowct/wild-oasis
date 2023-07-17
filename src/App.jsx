import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui//Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* Global styles does not accept any children, should be a sibling of the app */}
      <GlobalStyles />
      <StyledApp>
        <Heading as='h1'>The Wild Oasis</Heading>
        <Heading as='h2'>The Wild Oasis</Heading>
        <Heading as='h3'>The Wild Oasis</Heading>
        <Button onClick={() => alert('Check in')}>Checkin</Button>
        <Button onClick={() => alert('Check out')}>Checkout</Button>

        <Input type='number' placeholder='number of guest' />
      </StyledApp>
    </>
  );
}

export default App;
