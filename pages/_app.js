import React from "react";
import App from "next/app";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

import { Reset } from "../components/styles/Reset";

import Meta from "../components/Meta";
import Page from "../components/Page";

const theme = {};

const Global = createGlobalStyle`
  html {
    font-family: 'Raleway', sans-serif
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
						<Component {...pageProps} />
					</Page>
				</ThemeProvider>
			</>
		);
	}
}

export default MyApp;
