import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import InternalLink from "next/link";

import { allArticles } from "contentlayer/generated";
import OGP from "../components/OGP";
import Container from "../components/Container";

type PathParams = {
  slug: string;
};

type Entry = {
  title: string;
  date: string;
  basename: string;
};

type PageProps = {
  categories: Record<string, number>;
};

const getStaticProps: GetStaticProps<PageProps, PathParams> = ({ params }) => {
  const categories: Record<string, number> = {};
  allArticles.forEach((w) => {
    for (const category of w.categories) {
      if (categories.hasOwnProperty(category)) {
        categories[category]++;
      } else {
        categories[category] = 1;
      }
    }
  });

  return { props: { categories } };
};

const Categories: React.VFC<PageProps> = ({ categories }) => {
  const rankedCategories = Object.keys(categories).sort((a, b) => {
    if (categories[a] < categories[b]) return 1;
    if (categories[a] > categories[b]) return -1;
    return 0;
  });

  return <>
    <OGP
      title="カテゴリー一覧 | なつねこメモ"
      url="https://www.natsuneko.blog/categories"
    />
    <Container>
      <h2 className="mt-2 mb-4 text-2xl font-bold">カテゴリー一覧</h2>
      <ul className="pl-6 list-disc">
        {rankedCategories.map((w) => {
          // workaround for Next.js C#.html -> C%23.html conversion
          const category =
            w === "C#"
              ? encodeURIComponent(encodeURIComponent(w))
              : encodeURIComponent(w);

          return (
            <li key={w} className="my-2">
              <h2 className="mt-1">
                <InternalLink href={`/category/${category}`} className="text-xl underline">

                  {w}({categories[w]})
                </InternalLink>
              </h2>
            </li>
          );
        })}
      </ul>
    </Container>
  </>;
};

export { getStaticProps };
export default Categories;
