import React from "react";
import Markdown from "./Markdown";
import InternalLink from "next/link";

type Props = {
  title: string;
  date: string;
  categories: string[];
  content: string;
};

const Article: React.FC<Props> = ({ title, date, categories, content }) => {
  return (
    <div className="w-full">
      <p>{date}</p>
      <h2 className="text-3xl font-bold my-2">{title}</h2>
      <div>
        カテゴリー:
        {categories.map((w) => {
          return (
            <InternalLink key={w} href={`/category/${encodeURIComponent(w)}`}>
              <a className="underline mx-1">{w}</a>
            </InternalLink>
          );
        })}
      </div>
      <Markdown markdown={content} />
    </div>
  );
};

export default Article;
