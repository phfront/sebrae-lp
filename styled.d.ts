import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: {
      color: string;
      textColor: string;
    };
    primary: {
      color: string;
      textColor: string;
    };
    breakpoint: {
      mobile: string;
      tablet: string;
    }
  }
}
