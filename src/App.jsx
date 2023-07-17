import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui//Button';
import Input from './ui/Input';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-weight: yellow;
`;

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
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert('Check in')}>Checkin</Button>
        <Button onClick={() => alert('Check out')}>Checkout</Button>

        <Input type='number' placeholder='number of guest' />
      </StyledApp>
    </>
  );
}

export default App;
