import React from "react";
import Head from "next/head";

type Props = {
  title: string;
  description?: string;
  url: string;
  image?: string;
  imageHeight?: number;
  imageWidth?: number;
};

const OGP: React.VFC<Props> = ({
  title,
  description,
  url,
  image,
  imageWidth,
  imageHeight,
}) => {
  return (
    <>
      <Head>
        {description ? (
          <meta name="description" content={description} />
        ) : (
          <></>
        )}
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content={title} />
        {description ? (
          <meta property="og:description" content={description} />
        ) : (
          <></>
        )}
        <meta property="og:type" content="website" />
        {image ? <meta property="og:image" content={image} /> : <></>}
        {imageWidth ? (
          <meta property="og:image:width" content={String(imageWidth)} />
        ) : (
          <></>
        )}
        {imageHeight ? (
          <meta property="og:image:height" content={String(imageHeight)} />
        ) : (
          <></>
        )}
        <link rel="canonical" href={url} />
      </Head>
    </>
  );
};

export default OGP;
