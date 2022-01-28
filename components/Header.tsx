import React from "react";
import InternalLink from "next/link";

const Header: React.VFC<{}> = () => {
  return (
    <header className="flex w-full py-6">
      <div className="flex-auto text-center">
        <h1 className="text-4xl font-bold my-2">
          <InternalLink href="/">なつねこメモ</InternalLink>
        </h1>
        <p>主にプログラミング関連のメモ帳 ♪(✿╹ヮ╹)ﾉ</p>
        <p>
          書いてあるコードは自己責任でご自由にどうぞ。記事本文の無断転載は禁止です。
        </p>
      </div>
    </header>
  );
};

export default Header;
