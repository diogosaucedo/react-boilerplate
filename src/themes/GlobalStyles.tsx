import { createGlobalStyle } from 'styled-components';

import { fonts } from './fonts';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
  }

  body {
    font-family: ${fonts.primary}, sans-serif;
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
  }
`;

export default GlobalStyles;
