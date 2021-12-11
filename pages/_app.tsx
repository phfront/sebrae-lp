import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { useEffect, useState } from "react";
import { defaultTheme, GlobalStyles } from "../theme/themeConfig";
import { SideNavProvider } from "../contexts/sidenav";
import { DataProvider, useData } from "../contexts/data";

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<DefaultTheme>();

  useEffect(() => {
    // TODO: Buscar tema na base
    setTheme(defaultTheme);
    setTheme({
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
        tablet: "1000px",
      },
    });
  }, []);

  return (
    <ThemeProvider theme={theme ? theme : defaultTheme}>
      <GlobalStyles />
      <SideNavProvider>
        <DataProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DataProvider>
      </SideNavProvider>
    </ThemeProvider>
  );
}

export default MyApp;
