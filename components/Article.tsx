import React from "react";
import Markdown from "./Markdown";
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
    <Container>
      <p>{date}</p>
      <h2 className="my-2 text-3xl font-bold">{title}</h2>
      <div>
        カテゴリー:
        {categories.map((w) => {
          return (
            <InternalLink key={w} href={`/category/${encodeURIComponent(w)}`}>
              <a className="mx-1 underline">{w}</a>
            </InternalLink>
          );
        })}
      </div>
      <Markdown markdown={content} />
    </Container>
  );
};

export default Article;
