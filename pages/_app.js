import React from "react";
import App from "next/app";
import dynamic from "next/dynamic";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { parseCookies } from "nookies";

import { Reset } from "../components/styles/Reset";
import theme from "../components/styles/theme";

import Meta from "../components/Meta";
import LoginPage from "../components/LoginPage";

const Page = dynamic(() => import("../components/Page"), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const Global = createGlobalStyle`
  html {
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background-color: ${p => p.theme.white};
    font-size: 10px;
  }
`;

class MyApp extends App {
  static async getInitialProps(ctx) {
    const { testCookie } = parseCookies(ctx, {});
    console.log({ testCookie });
    return {};
  }

  render() {
    const { Component, ...rest } = this.props;
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          {true ? (
            <LoginPage />
          ) : (
            <Page>
              <Reset />
              <Global />
              <Component {...rest} />
            </Page>
          )}
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
