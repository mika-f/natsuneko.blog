import React from "react";
import Markdown from "./Markdown";

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
      <Markdown markdown={content} />
    </div>
  );
};

export default Article;
