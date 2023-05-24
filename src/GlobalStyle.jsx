const { createGlobalStyle } = require('styled-components');
const { default: reset } = require('styled-reset');

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --primary: #21BF48;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
