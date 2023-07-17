import { styled } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui//Button';
import Input from './ui/Input';
import Heading from './ui/Heading';
import Row from './ui/Row';

const StyledApp = styled.div`
  /* background-color: orangered; */
  padding: 20px;
`;

function App() {
  return (
    <>
      {/* Global styles does not accept any children, should be a sibling of the app */}
      <GlobalStyles />
      <StyledApp>
        <Row>
          <Row type='horizontal'>
            <Heading as='h1'>The Wild Oasis</Heading>
            <div>
              <Heading as='h2'>The Check in and out</Heading>
              <Button onClick={() => alert('Check in')}>Check in</Button>
              <Button variation='secondary' size='small' onClick={() => alert('Check out')}>
                Check out
              </Button>
            </div>
          </Row>
          <Row>
            <Heading as='h3'>Form</Heading>
            <form>
              <Input type='number' placeholder='number of guest' />
              <Input type='number' placeholder='number of guest' />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
