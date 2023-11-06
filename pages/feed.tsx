import { writeFile } from "fs/promises";
import { GetStaticProps } from "next";
import { Feed as RssFeed } from "feed";
import { marked } from "marked";
import { allArticles } from "contentlayer/generated";

const generateRssFeed = async (): Promise<void> => {
  const baseUrl = "https://www.natsuneko.blog";
  const date = new Date();
  const author = {
    name: "Natsuneko",
    email: "me@natsuneko.cat",
    link: "https://www.natsuneko.cat",
  };

  const feed = new RssFeed({
    title: "なつねこメモ",
    description: "主にプログラミング関連のメモ帳 ♪(✿╹ヮ╹)ﾉ",
    id: baseUrl,
    link: baseUrl,
    language: "ja",
    image: `${baseUrl}/favicon.ico`,
    author,
    copyright: `All Rights Reserved 2015 - ${date.getFullYear()} ${
      author.name
    }`,
    updated: date,
    feedLinks: {
      rss2: `${baseUrl}/rss/feed.xml`,
      json: `${baseUrl}/rss/feed.json`,
      atom: `${baseUrl}/rss/atom.xml`,
    },
  });

  const entries = allArticles.slice(-20);
  for (const entry of entries.reverse()) {
    feed.addItem({
      title: entry.title,
      description: "no description provided",
      id: `${baseUrl}/entry/${entry.basename}`,
      link: `${baseUrl}/entry/${entry.basename}`,
      content: marked(entry.body.raw),
      date: new Date(entry.date),
    });
  }

  await writeFile("./public/rss/feed.xml", feed.rss2());
  await writeFile("./public/rss/rss.xml", feed.rss2());
  await writeFile("./public/rss/feed.json", feed.json1());
  await writeFile("./public/rss/atom.xml", feed.atom1());
};

const getStaticProps: GetStaticProps = async () => {
  await generateRssFeed();

  return { props: {} };
};

const Feed: React.VFC = () => {
  return <></>;
};

export { getStaticProps };

export default Feed;
