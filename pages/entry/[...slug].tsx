import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import { allArticles } from "contentlayer/generated";
import type { Article as Entry, Redirect } from "contentlayer/generated";

import Article from "../../components/Article";
import { NextSeo } from "next-seo";

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

  return {
    paths,
    fallback: false,
  };
};

// @ts-expect-error
const getStaticProps: GetStaticProps<Props, PathParams> = async ({
  params,
}) => {
  const [year, month, day, slug] = params!.slug;

  const entry =
    allArticles.find((w) => w.basename === `${year}/${month}/${day}/${slug}`) ??
    null;

  return {
    props: { entry, slug },
  };
};

const Entry: React.FC<Props> = ({ entry, slug }) => {
  const url = `https://www.natsuneko.blog/entry/${entry.date}/${slug}`;

  return (
    <>
      <NextSeo
        title={entry.title}
        description={entry.summary}
        canonical={url}
      />
      <Article
        title={entry.title}
        date={entry.date}
        categories={entry.categories}
        content={entry.body.code}
      />
    </>
  );
};

export { getStaticPaths, getStaticProps };

export default Entry;
