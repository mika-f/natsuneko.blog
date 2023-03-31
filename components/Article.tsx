import React from "react";
import { Markdown } from "./Markdown";
import InternalLink from "./InternalLink";

type Props = {
  title: string;
  date: string;
  categories: string[];
  content: string;
};

const Article: React.FC<Props> = ({ title, date, categories, content }) => {
  return (
    <div>
      <p>{date}</p>
      <h2 className="my-2 text-3xl font-bold">{title}</h2>
      <div className="flex">
        カテゴリー：
        <ul className="ml-2 flex gap-x-2">
          {categories.map((w) => {
            // workaround for Next.js C#.html -> C%23.html conversion
            const category =
              w === "C#"
                ? encodeURIComponent(encodeURIComponent(w))
                : encodeURIComponent(w);

            return (
              <li key={w}>
                <InternalLink href={`/category/${category}`} hasUnderline>
                  {w}
                </InternalLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Markdown markdown={content} />
    </div>
  );
};

export default Article;
