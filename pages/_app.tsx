import React from "react";
import { DefaultSeo } from "next-seo";
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
      <DefaultSeo
        titleTemplate="%s | なつねこメモ"
        defaultTitle="なつねこメモ"
        description="no description provided"
        openGraph={{
          images: [
            {
              url: "https://assets.natsuneko.blog/media/natsuneko.png",
            },
          ],
          locale: "ja_JP",
          site_name: "なつねこメモ",
          type: "website",
        }}
        twitter={{
          handle: "@6jz",
          site: "@6jz",
          cardType: "summary",
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Partytown debug={true} forward={["dataLayer.push", "gtag"]} />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-LH1W6QPTN1"
        type="text/partytown"
      />
      <Script id="google-analytics" type="text/partytown">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = function gtag() { window.dataLayer.push(arguments); }

          gtag('js', new Date());

        gtag('config', 'G-LH1W6QPTN1');
        `}
      </Script>
    </>
  );
};

export default App;
