import React from "react";
import ExternalLink from "../components/ExternalLink";

const Links: React.VFC = () => {
  const links = [
    {
      title: "ソースコード",
      href: "https://github.com/mika-f/natsuneko.blog",
      description: "このブログのソースコードを GitHub で公開しています。",
    },
    {
      title: "FANBOX",
      href: "https://natsuneko.fanbox.cc",
      description: "日常系のブログはコチラで公開しています。あと支援できます。",
    },
    {
      title: "RSS",
      href: "/rss/feed.xml",
      description: "このブログの更新情報を RSS フィードで配信しています。",
    },
  ];
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold">リンク集</h2>
      {links.map((link) => {
        const { title, href, description } = link;

        return (
          <section key={href} className="my-4">
            <ExternalLink href={href} hasUnderline className="block mb-2">
              {title}
            </ExternalLink>
            <p className="pl-4">{description}</p>
          </section>
        );
      })}
    </div>
  );
};

export default Links;
