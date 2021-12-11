import { createGlobalStyle, DefaultTheme } from "styled-components";

export const defaultTheme: DefaultTheme = {
  body: {
    color: "rgb(255, 255, 255)",
    textColor: "rgb(57, 77, 96)",
  },
  primary: {
    color: "rgb(0, 94, 184)",
    textColor: "rgb(255, 255, 255)",
  },
  breakpoint: {
    mobile: "700px",
    tablet: "1000px"
  }
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }: { theme: DefaultTheme }) => theme.body.color};
    color: ${({ theme }: { theme: DefaultTheme }) => theme.body.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
`;
