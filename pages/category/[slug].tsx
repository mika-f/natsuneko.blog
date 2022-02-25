import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import InternalLink from "next/link";

import { allArticles } from "contentlayer/generated";

import OGP from "../../components/OGP";

type PathParams = {
  slug: string;
};

type Entry = {
  title: string;
  date: string;
  basename: string;
};

type PageProps = {
  category: string;
  entries: Entry[];
};

const getStaticPaths: GetStaticPaths<PathParams> = () => {
  const categories = new Set(allArticles.flatMap((w) => w.categories));
  const paths = Array.from(categories).map((w) => {
    return { params: { slug: w } };
  });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PageProps, PathParams> = ({ params }) => {
  const entries = allArticles
    .filter((w) => w.categories.includes(params.slug))
    .map((w) => {
      return {
        title: w.title,
        date: w.date,
        basename: w.basename,
      };
    })
    .reverse();

  return {
    props: {
      entries,
      category: params.slug,
    },
  };
};

const Category: React.VFC<PageProps> = ({ category, entries }) => {
  return (
    <>
      <OGP
        title={`カテゴリー: ${category} | なつねこメモ`}
        url="https://www.natsuneko.blog/categories"
      />
      <div className="w-full">
        <h2 className="text-3xl font-bold mt-2 mb-4">
          カテゴリー: {category} ({entries.length})
        </h2>
        {entries.map((w) => {
          return (
            <div key={w.basename} className="mt-2 mb-12">
              {w.date}
              <h2 className="mt-1">
                <InternalLink href={`/entry/${w.basename}`}>
                  <a className="underline text-xl">{w.title}</a>
                </InternalLink>
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
};

export { getStaticPaths, getStaticProps };
export default Category;
