import React from "react";
import ReactMarkdown from "react-markdown";
import {
  CodeComponent,
  ComponentType,
  ComponentPropsWithoutRef,
  ReactMarkdownProps,
  UnorderedListComponent,
} from "react-markdown/lib/ast-to-react";
import Raw from "rehype-raw";
import GitHub from "remark-gfm";

import ExternalLink from "./ExternalLink";
import InlineCode from "./InlineCode";
import SyntaxHighlighter from "./SyntaxHighlighter";
import ZoomableFigure from "./ZoomableFigure";
import ZoomableImage from "./ZoomableImage";

type Props = {
  markdown: string;
};

type CallbackFunc<TagName extends string> = ComponentType<
  ComponentPropsWithoutRef<TagName> & ReactMarkdownProps
>;

const Markdown: React.VFC<Props> = ({ markdown }) => {
  const a: CallbackFunc<"a"> = (props) => {
    return (
      <ExternalLink href={props.href} hasUnderline>
        {props.children}
      </ExternalLink>
    );
  };

  const code: CodeComponent = ({ inline, className, children }) => {
    const match = /language-(\w+)/.exec(className || "language-plaintext");
    const filename = match ? className?.split(":")[1] ?? undefined : undefined;
    return !inline && match ? (
      <SyntaxHighlighter
        language={match[1]}
        filename={filename}
        content={String(children).replace(/\n$/, "")}
      />
    ) : (
      <InlineCode>{children}</InlineCode>
    );
  };

  const img: CallbackFunc<"img"> = (props) => {
    return <ZoomableImage src={props.src} alt={props.alt} />;
  };

  const figure: CallbackFunc<"figure"> = (props) => {
    const children = props.children.filter((w) => w instanceof Object);
    const img = children[0] as React.ReactElement<HTMLImageElement>;
    const caption = children[1] as React.ReactElement<HTMLDivElement>;

    return (
      <ZoomableFigure
        src={img.props.src}
        alt={img.props.alt}
        caption={caption ? String(caption.props.children) : undefined}
      />
    );
  };

  const p: CallbackFunc<"p"> = (props) => {
    return <p className="my-4">{props.children}</p>;
  };

  const ul: UnorderedListComponent = ({ children }) => {
    return <ul className="list-disc pl-8 my-4">{children}</ul>;
  };

  return (
    <ReactMarkdown
      components={{ a, code, figure, img, p, ul }}
      rehypePlugins={[Raw]}
      remarkPlugins={[GitHub]}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
