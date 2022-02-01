import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle =  createGlobalStyle `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
      font-family: sans-serif;
      background-color: #132742;
  }

  button{
    cursor: pointer;
  }

`

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;