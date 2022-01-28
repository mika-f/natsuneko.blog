import React from "react";
import Head from "next/head";
import Script from "next/script";
import Layout from "../components/Layout";

import "../styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Script
        src="https://kit.fontawesome.com/70c6fd74b5.js"
        crossOrigin="anonymous"
      />
    </>
  );
};

export default App;
