import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";

import {
  getContent,
  getEntries,
  getRedirect,
  getRedirects,
} from "../../utils/fs";
import Article from "../../components/Article";
import OGP from "../../components/OGP";

type PathParams = {
  slug: [string, string, string, string];
};

type Props = {
  title: string;
  date: string;
  categories: string[];
  content: string;
  slug: string;
};

const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  const entries = await getEntries();
  const paths = entries.map((w) => {
    const [year, month, day, slug] = w.basename.split("/");

    return {
      params: {
        slug: [year, month, day, slug] as [string, string, string, string],
      },
    };
  });

  const redirects = await getRedirects();
  redirects.forEach((w) => {
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
  const redirect = await getRedirect(`${year}${month}${day}${slug}`);
  if (redirect) {
    return {
      redirect: {
        permanent: true,
        destination: `/entry/${redirect.to}`,
      },
    };
  }

  return {
    props: { ...getContent(`${year}${month}${day}`), slug },
  };
};

const Entry: React.VFC<Props> = ({
  title,
  date,
  categories,
  content,
  slug,
}) => {
  const url = `https://natsuneko.blog/entry/${date}/${slug}`;
  return (
    <div className="w-full">
      <Head>
        <title>{title} | なつねこメモ</title>
      </Head>
      <OGP title={`${title} | なつねこメモ`} url={url} />
      <Article
        title={title}
        date={date}
        categories={categories}
        content={content}
      />
    </div>
  );
};

export { getStaticPaths, getStaticProps };

export default Entry;
