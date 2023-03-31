import React from "react";
import { GetStaticProps } from "next";
import InternalLink from "../components/InternalLink";
import { allArticles } from "contentlayer/generated";
import { NextSeo } from "next-seo";

type Entry = {
  title: string;
  date: string;
  basename: string;
};

type Props = {
  entries: Entry[];
};

const getStaticProps: GetStaticProps<Props, {}> = async ({}) => {
  return {
    props: {
      entries: allArticles
        .map((w) => {
          return {
            title: w.title,
            date: w.date,
            basename: w.basename,
          } as Entry;
        })
        .reverse(),
    },
  };
};

const Home: React.VFC<Props> = ({ entries }) => {
  return (
    <>
      {entries.map((w) => {
        return (
          <div key={w.basename} className="mt-2 mb-12">
            {w.date}
            <h2 className="mt-1">
              <InternalLink
                href={`/entry/${w.basename}`}
                className="text-xl break-words"
                hasUnderline
              >
                {w.title}
              </InternalLink>
            </h2>
          </div>
        );
      })}
    </>
  );
};

export { getStaticProps };

export default Home;
