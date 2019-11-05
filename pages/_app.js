import React from "react";
import App from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { Reset } from "../components/styles/Reset";
import theme from "../components/styles/theme";

import Navbar from "../components/Navbar";
import Meta from "../components/Meta";
import Page from "../components/Page";

const Inner = styled.div`
  max-width: 100%;
  padding: 1rem;
  z-index: -1;
  height: auto;
`;

const Global = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif
  }
  body {
    background-color: ${p => p.theme.white};
  }
`;

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Meta />
        <ThemeProvider theme={theme}>
          <Page>
            <Reset />
            <Global />
            <Navbar />
            <Inner>
              <Component {...pageProps} />
            </Inner>
          </Page>
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp;
