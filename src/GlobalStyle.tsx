import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  /* Font */
  @font-face {
      font-family: 'Pretendard-Regular';
      src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
      font-weight: 400;
      font-style: normal;
  }

  /* Reset */
  ${reset}

  /* 컬러 변수 및 html */
  :root {
    --primary: #21BF48;
    --gray: #767676;
    --footer-bg: #f2f2f2;
    --border: #c4c4c4;
    --error: #EB5757;

    /* html */
    height: 100vh;
    font-family: 'Pretendard-Regular';
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
    padding: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: border-box;
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
`;

export default GlobalStyle;
