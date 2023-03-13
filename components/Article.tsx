import React from "react";
import { Markdown } from "./Markdown";
import InternalLink from "next/link";
import Container from "./Container";

type Props = {
  title: string;
  date: string;
  categories: string[];
  content: string;
};

const Article: React.FC<Props> = ({ title, date, categories, content }) => {
  return (
    <Container className="bg-season-background">
      <p>{date}</p>
      <h2 className="my-2 text-3xl font-bold">{title}</h2>
      <div>
        カテゴリー:
        {categories.map((w) => {
          // workaround for Next.js C#.html -> C%23.html conversion
          const category =
            w === "C#"
              ? encodeURIComponent(encodeURIComponent(w))
              : encodeURIComponent(w);

          return (
            <InternalLink
              key={w}
              href={`/category/${category}`}
              className="mx-1 underline text-season-link"
            >
              {w}
            </InternalLink>
          );
        })}
      </div>
      <Markdown markdown={content} />
    </Container>
  );
};

export default Article;
