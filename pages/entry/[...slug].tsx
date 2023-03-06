import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { allArticles, allRedirects } from "contentlayer/generated";
import type { Article as Entry, Redirect } from "contentlayer/generated";

import Article from "../../components/Article";
import OGP from "../../components/OGP";

type PathParams = {
  slug: [string, string, string, string];
};

type Props = {
  entry: Entry;
  redirect: Redirect;
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
  const redirect =
    allRedirects[0].redirects.find(
      (w) => w.from === `${year}/${month}/${day}/${slug}`
    ) ?? null;
  const entry =
    allArticles.find((w) => w.basename === `${year}/${month}/${day}/${slug}`) ??
    null;

  return {
    props: { entry, slug, redirect },
  };
};

const Entry: React.VFC<Props> = ({ entry, redirect, slug }) => {
  const url = redirect
    ? `https://www.natsuneko.blog/entry/${redirect.to}`
    : `https://www.natsuneko.blog/entry/${entry.date}/${slug}`;
  const router = useRouter();

  useEffect(() => {
    if (redirect) router.replace(redirect.to);
  }, [redirect, router]);

  if (redirect) {
    return (
      <div className="w-full">
        <OGP
          title="Redirecting... | なつねこメモ"
          description="redirect"
          url={url}
        />

        <div
          className="flex items-center justify-center w-full"
          style={{ height: "calc(100vh - 65px - 212px)" }}
        >
          <div className="flex items-center justify-center h-16 pr-4 mr-4 border-r">
            <div className="text-4xl">301</div>
          </div>
          <div>This page moved permanently</div>
        </div>
      </div>
    );
  }

  return (
    <>
      <OGP
        title={`${entry.title} | なつねこメモ`}
        description={entry.summary}
        url={url}
      />
      <div className="w-full">
        <Article
          title={entry.title}
          date={entry.date}
          categories={entry.categories}
          content={entry.body.html}
        />
      </div>
    </>
  );
};

export { getStaticPaths, getStaticProps };

export default Entry;
