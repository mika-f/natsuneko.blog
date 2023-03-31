import React from "react";
import InternalLink from "./InternalLink";

const Header: React.FC<{}> = () => {
  return (
    <header className="flex flex-col w-full py-6">
      <h1 className="my-2 text-4xl">
        <InternalLink className="font-bold text-black" href="/">
          なつねこメモ
        </InternalLink>
      </h1>
      <p>主にプログラミング関連のメモ帳 ♪(✿╹ヮ╹)ﾉ</p>
      <p>
        書いてあるコードは自己責任でご自由にどうぞ。記事本文の無断転載は禁止です。
      </p>
    </header>
  );
};

export default Header;
