import React from "react";
import { GetStaticProps } from "next";
import Head from "next/head";
import InternalLink from "next/link";
import { allArticles } from "contentlayer/generated";

import OGP from "../components/OGP";

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
      <OGP title="なつねこメモ" url="https://www.natsuneko.blog/" />
      <div className="w-full">
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

export { getStaticProps };

export default Home;
