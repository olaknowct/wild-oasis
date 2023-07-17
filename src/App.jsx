import { styled } from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  font-weight: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
  display: block;
  margin-top: 2rem;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert('Check in')}>Checkin</Button>
      <Button onClick={() => alert('Check out')}>Checkout</Button>

      <Input type='number' placeholder='number of guest' />
    </StyledApp>
  );
}

export default App;
