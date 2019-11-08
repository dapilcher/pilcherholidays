import React from "react";
import App from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { IdentityContextProvider } from "react-netlify-identity-widget";

import { Reset } from "../components/styles/Reset";
import theme from "../components/styles/theme";

import Meta from "../components/Meta";
import Page from "../components/Page";

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
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <IdentityContextProvider url="https://pilcherholidays.com">
            <Page>
              <Reset />
              <Global />
              <Component {...pageProps} />
            </Page>
          </IdentityContextProvider>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
