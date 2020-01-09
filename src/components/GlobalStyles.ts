import { createGlobalStyle } from 'styled-components';
import { backgroundColor, textColor } from './themeColors';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato|Gourgette&display=swap');
  body {
    font-family: 'Lato', sans-serif;
    background-color: ${backgroundColor}
    color: ${textColor}
  }
  h1 {
    font-family: 'Gourgette', cursive;
  }

  button {
    font-family: 'Lato', sans-serif;
  }
`;
