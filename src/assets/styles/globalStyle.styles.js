import {createGlobalStyle} from "styled-components";
import {theme} from "./theme.styles";

export const GlobalStyle = createGlobalStyle`
  // GENERAL
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI Regular', sans-serif;
    background-color: ${theme.colors.color1};
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
    overflow-wrap: break-word;
    word-wrap: break-word;
    white-space: normal;
  }

  // FONTS
  @font-face {
    font-family: 'Segoe UI Regular';
    font-style: normal;
    font-weight: normal;
    src: url('/fonts/Segoe_UI.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Italic';
    font-style: italic;
    font-weight: normal;
    src: url('/fonts/Segoe_UI_Italic.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Bold';
    font-style: normal;
    font-weight: bold;
    src: url('/fonts/Segoe_UI_Bold.woff') format('woff');
  }
  
  @font-face {
    font-family: 'Segoe UI Bold Italic';
    font-style: italic;
    font-weight: bold;
    src: url('/fonts/Segoe_UI_Bold_Italic.woff') format('woff');
  }
`