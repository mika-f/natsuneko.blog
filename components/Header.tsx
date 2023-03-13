import React from "react";
import InternalLink from "next/link";
import ExternalLink from "./ExternalLink";

const Header: React.VFC<{}> = () => {
  return (
    <header className="flex flex-col w-full py-6">
      <div className="flex-auto text-center">
        <h1 className="my-2 text-4xl font-bold">
          <InternalLink href="/">なつねこメモ</InternalLink>
        </h1>
        <p>主にプログラミング関連のメモ帳 ♪(✿╹ヮ╹)ﾉ</p>
        <p>
          書いてあるコードは自己責任でご自由にどうぞ。記事本文の無断転載は禁止です。
        </p>
      </div>
      <div className="flex flex-row justify-center my-4">
        <div className="mr-2 text-xl text-season-link underline">
          <InternalLink href="/categories">カテゴリー一覧</InternalLink>
        </div>
        <div className="mr-2 text-xl text-season-link underline">
          <InternalLink href="/about">このサイトについて</InternalLink>
        </div>
        <div className="mx-2 text-xl underline">
          <ExternalLink href="https://www.google.com/search?q=site:www.natsuneko.blog">
            検索
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
