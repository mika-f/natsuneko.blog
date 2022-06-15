import React, { useEffect } from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import InternalLink from "next/link";

import { allArticles } from "contentlayer/generated";

import OGP from "../../components/OGP";
import Container from "../../components/Container";
import { useRouter } from "next/router";

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
  redirect: string | null;
};

const REDIRECT_MAPS = {
  "C#": "CSharp",
};

const getStaticPaths: GetStaticPaths<PathParams> = () => {
  const categories = new Set(allArticles.flatMap((w) => w.categories));
  const paths = Array.from(categories).map((w) => {
    return { params: { slug: REDIRECT_MAPS[w] ?? w } };
  });

  for (const key of Object.keys(REDIRECT_MAPS))
    paths.push({ params: { slug: key } });

  return {
    paths,
    fallback: false,
  };
};

const getStaticProps: GetStaticProps<PageProps, PathParams> = ({ params }) => {
  const slug = Object.keys(REDIRECT_MAPS).find(
    (key) => REDIRECT_MAPS[key] === params.slug
  );
  const entries = allArticles
    .filter(
      (w) => w.categories.includes(params.slug) || w.categories.includes(slug)
    )
    .map((w) => {
      return {
        title: w.title,
        date: w.date,
        basename: w.basename,
      };
    })
    .reverse();

  const redirect = REDIRECT_MAPS[params.slug] ?? null;

  return {
    props: {
      entries,
      category: params.slug,
      redirect,
    },
  };
};

const Category: React.VFC<PageProps> = ({ category, entries, redirect }) => {
  const router = useRouter();

  useEffect(() => {
    if (redirect) router.replace(redirect);
  }, [redirect, router]);

  if (redirect) {
    <div className="w-full">
      <OGP
        title="Redirecting... | なつねこメモ"
        description="redirect"
        url={`/category/${redirect}`}
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
    </div>;
  }

  const original = Object.keys(REDIRECT_MAPS).find(
    (key) => REDIRECT_MAPS[key] === category
  );

  return (
    <>
      <OGP
        title={`カテゴリー: ${original ?? category} | なつねこメモ`}
        url="https://www.natsuneko.blog/categories"
      />
      <Container>
        <h2 className="mt-2 mb-4 text-3xl font-bold">
          カテゴリー: {original ?? category} ({entries.length})
        </h2>
        {entries.map((w) => {
          return (
            <div key={w.basename} className="mt-2 mb-12">
              {w.date}
              <h2 className="mt-1">
                <InternalLink href={`/entry/${w.basename}`}>
                  <a className="text-xl underline">{w.title}</a>
                </InternalLink>
              </h2>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export { getStaticPaths, getStaticProps };
export default Category;
