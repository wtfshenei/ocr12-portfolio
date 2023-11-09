import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI Regular', sans-serif;
    background-color: cornflowerblue;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Segoe UI Regular';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/Segoe UI.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Italic';
    font-style: italic;
    font-weight: normal;
    src: url('/fonts/Segoe UI Italic.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Bold';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/Segoe UI Bold.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Bold Italic';
    font-style: italic;
    font-weight: bold;
    src: url('/fonts/Segoe UI Bold Italic.woff') format('woff');
  }
`