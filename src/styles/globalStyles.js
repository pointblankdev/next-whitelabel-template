import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    border-color: currentColor;
  }
  
  body {
    margin: 0;
    padding: 0;
    font-family: "Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    background-color: ${(props) => props.theme.colors.dark};
  }

  .text {
    color: ${(props) => props.theme.colors.text};
  }

  .primary {
    color: ${(props) => props.theme.colors.primary};
  }

  .secondary {
    color: ${(props) => props.theme.secondary};
  }

  .accent {
    color: ${(props) => props.theme.accent};
  }

`;

export default GlobalStyle;
