import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";
import { Partytown } from "@builder.io/partytown/react";

import "../styles/globals.css";
import useGA from "../hooks/useGA";
import { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  useGA();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Partytown forward={["dataLayer.push"]} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LH1W6QPTN1"
        type="text/partytown"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LH1W6QPTN1');
        `}
      </Script>
    </>
  );
};

export default App;
