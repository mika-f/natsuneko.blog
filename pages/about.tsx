import React from "react";

import ExternalLink from "../components/ExternalLink";
import { NextSeo } from "next-seo";

const About: React.FC = () => {
  return (
    <>
      <NextSeo title="このサイトについて" />
      <h2 className="my-2 text-3xl font-bold">このサイトについて</h2>
      <section className="mt-8 mb-4">
        <h3 className="my-2 text-2xl font-bold">このブログについて</h3>
        <p>
          作者の夏猫さんが主に技術情報を書くブログです。日常系が知りたい方は、
          &nbsp;
          <ExternalLink href="https://natsuneko.fanbox.cc" hasUnderline>
            pixiv FANBOX
          </ExternalLink>
          &nbsp;の方でいろいろ更新しています。
        </p>
        <p>
          <ExternalLink href="/rss/feed.xml" hasUnderline>
            RSS
          </ExternalLink>
          &nbsp;で更新情報を配信しているので、定期的に情報を確認したい方は、
          Twitter などよりも確実です。
        </p>
        <p>
          ブログのソースコードは&nbsp;
          <ExternalLink
            href="https://github.com/mika-f/natsuneko.blog"
            hasUnderline
          >
            GitHub
          </ExternalLink>
          &nbsp;で公開しています。 Next.js + TailwindCSS 製です。
        </p>
      </section>
      <section className="mt-8 mb-4">
        <h3 className="my-2 text-2xl font-bold">Google Analytics について</h3>
        <p>
          このサイトは Google Analytics を使用しています。また、 Google
          Analytics について Cookie を使用しており、データは匿名で収集されます。
          AdBlock
          使っているとブロックしてくれるので、嫌なら入れてくれてオッケーです。
          私のオススメは&nbsp;
          <ExternalLink href="https://nextdns.io/?from=arf4vefb" hasUnderline>
            NextDNS
          </ExternalLink>
          &nbsp;でまるごとブロックです。
        </p>
      </section>
      <section className="mt-8 mb-4">
        <h3 className="my-2 text-2xl font-bold">その他</h3>
        <p>主要 SNS</p>
        <ul className="my-2">
          <li>
            Twitter:{" "}
            <ExternalLink href="https://twitter.com/6jz" hasUnderline>
              @6jz
            </ExternalLink>
          </li>
          <li>
            GitHub:{" "}
            <ExternalLink href="https://twitter.com/mika-f" hasUnderline>
              @mika-f
            </ExternalLink>
          </li>
        </ul>
        <p>それ以外の各種 SNS の類いはこちらにまとめてあります。</p>
        <p>
          <ExternalLink href="https://bento.me/natsuneko" hasUnderline>
            bento.me/natsuneko
          </ExternalLink>
        </p>
      </section>
    </>
  );
};

export default About;
