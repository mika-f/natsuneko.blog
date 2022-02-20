import React from "react";
import InternalLink from "next/link";
import ExternalLink from "./ExternalLink";

const Header: React.VFC<{}> = () => {
  return (
    <header className="flex flex-col w-full py-6">
      <div className="flex-auto text-center">
        <h1 className="text-4xl font-bold my-2">
          <InternalLink href="/">なつねこメモ</InternalLink>
        </h1>
        <p>主にプログラミング関連のメモ帳 ♪(✿╹ヮ╹)ﾉ</p>
        <p>
          書いてあるコードは自己責任でご自由にどうぞ。記事本文の無断転載は禁止です。
        </p>
      </div>
      <div className="my-4 flex flex-row justify-center">
        <div className="text-xl underline mr-2">
          <InternalLink href="/links">リンク集</InternalLink>
        </div>
        <div className="text-xl underline mr-2">
          <InternalLink href="/categories">カテゴリー一覧</InternalLink>
        </div>
        <div className="text-xl underline mx-2">
          <ExternalLink href="https://www.google.com/search?q=site:www.natsuneko.blog">
            検索
          </ExternalLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
