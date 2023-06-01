const { createGlobalStyle } = require('styled-components');
const { default: reset } = require('styled-reset');

const GlobalStyle = createGlobalStyle`
  ${reset}
  :root {
    --primary: #21BF48;
    --gray: #767676;
    --footer-bg: #f2f2f2;

    /* html */
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .a11y-hidden {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }

  button {
    border: none;
    background-color: inherit;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
