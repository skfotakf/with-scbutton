import React from 'react';
import styled , {ThemeProvider } from 'styled-components';
import Button from './components/button';
//주석 삭제예정입니다 잘 안되네요

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
  `;

const ButtonGroup = styled.div`
  & + & {
    margin-top: 1rem;
}`;

function App() {
  return (
    <ThemeProvider
     theme={{
       palette: {
         blue: '#228be6',
         gray: '#495057',
         pink: '#f06595',
       }
     }

     }
     >
    <AppBlock>
      <ButtonGroup>
        <Button > BUTTON</Button>
        <Button color='gray'> BUTTON</Button>
        <Button color='pink'> BUTTON</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button size='large'> BUTTON</Button>
        <Button size='medium' color='gray'> BUTTON</Button>
        <Button size= 'small' color='pink'> BUTTON</Button>
      </ButtonGroup>
    
    </AppBlock>
    </ThemeProvider>
  );
}

export default App;

