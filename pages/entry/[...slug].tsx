import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import { allArticles, allRedirects } from "contentlayer/generated";
import type { Article as Entry } from "contentlayer/generated";

import Article from "../../components/Article";
import OGP from "../../components/OGP";

type PathParams = {
  slug: [string, string, string, string];
};

type Props = {
  entry: Entry;
  slug: string;
};

const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const paths = allArticles.map((w) => {
    const [year, month, day, slug] = w.basename.split("/");

    return {
      params: {
        slug: [year, month, day, slug] as [string, string, string, string],
      },
    };
  });

  allRedirects[0].redirects.forEach((w) => {
    const [year, month, day, slug] = w.from.split("/");

    paths.push({
      params: {
        slug: [year, month, day, slug] as [string, string, string, string],
      },
    });
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<Props, PathParams> = async ({
  params,
}) => {
  const [year, month, day, slug] = params.slug;
  const redirect = allRedirects[0].redirects.find(
    (w) => w.from === `${year}${month}${day}/${slug}`
  );
  if (redirect) {
    return {
      redirect: {
        permanent: true,
        destination: `/entry/${redirect.to}`,
      },
    };
  }

  const entry = allArticles.find(
    (w) => w.basename === `${year}/${month}/${day}/${slug}`
  );
  return {
    props: { entry, slug },
  };
};

const Entry: React.VFC<Props> = ({ entry, slug }) => {
  const url = `https://natsuneko.blog/entry/${entry.date}/${slug}`;
  return (
    <div className="w-full">
      <Head>
        <title>{entry.title} | なつねこメモ</title>
      </Head>
      <OGP
        title={`${entry.title} | なつねこメモ`}
        description={entry.summary}
        url={url}
      />
      <Article
        title={entry.title}
        date={entry.date}
        categories={entry.categories}
        content={entry.body.raw}
      />
    </div>
  );
};

export { getStaticPaths, getStaticProps };

export default Entry;
