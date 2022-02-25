import React from "react";
import { NextSeo } from "next-seo";

type Props = {
  title: string;
  description?: string;
  url: string;
};

const OGP: React.VFC<Props> = ({ title, description, url }) => {
  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        description={description ?? "no description provided"}
        openGraph={{
          url,
          title,
          images: [
            {
              url: "https://assets.natsuneko.blog/media/natsuneko.png",
              alt: title,
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
    </>
  );
};

export default OGP;
