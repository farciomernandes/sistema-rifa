import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline:0;
  }
  body{
    background: #8900e9;
    color: #8900e9;
    -webkit-font-smoothing: antialiased;
    font-family: 'Lato', sans-serif;
  }
  body, input, button{
    button {
      cursor: pointer;
    }
  }

  li{
      list-style: none;
  }

  a{
      text-decoration: none;
      color: white;
  }

 
`;
