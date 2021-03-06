import React from "react";
import ReactMarkdown from "react-markdown";
import {
  CodeComponent,
  ComponentType,
  ComponentPropsWithoutRef,
  OrderedListComponent,
  ReactMarkdownProps,
  UnorderedListComponent,
  TableCellComponent,
} from "react-markdown/lib/ast-to-react";
import Raw from "rehype-raw";
import MathJax from "rehype-mathjax";
import GitHub from "remark-gfm";
import Math from "remark-math";

import ExternalLink from "./ExternalLink";
import InlineCode from "./InlineCode";
import SyntaxHighlighter from "./SyntaxHighlighter";
import Table from "./Table";
import TableData from "./TableData";
import TableHead from "./TableHead";
import TableHeader from "./TableHeader";
import ZoomableFigure from "./ZoomableFigure";
import ZoomableImage from "./ZoomableImage";
import EmbedTitleLink from "./EmbdedTitleLink";
import EmbedLink from "./EmbdedLink";

type Props = {
  markdown: string;
};

type CallbackFunc<TagName extends string> = ComponentType<
  ComponentPropsWithoutRef<TagName> & ReactMarkdownProps
>;

const Markdown: React.VFC<Props> = ({ markdown }) => {
  const a: CallbackFunc<"a"> = (props) => {
    if (props.href.endsWith(":title")) {
      return (
        <EmbedTitleLink
          url={props.href.substring(0, props.href.lastIndexOf(":title"))}
        />
      );
    }
    if (props.href.endsWith(":embed")) {
      return (
        <EmbedLink
          url={props.href.substring(0, props.href.lastIndexOf(":embed"))}
        />
      );
    }

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

  const td: TableCellComponent = (props) => {
    return (
      <TableData align={props.node.properties.align as any}>
        {props.children}
      </TableData>
    );
  };

  const th: TableCellComponent = (props) => {
    return (
      <TableHeader align={props.node.properties.align as any}>
        {props.children}
      </TableHeader>
    );
  };

  const ul: UnorderedListComponent = ({ children }) => {
    return <ul className="pl-8 my-4 list-disc">{children}</ul>;
  };

  const ol: OrderedListComponent = ({ children }) => {
    return <ol className="pl-8 my-4 list-decimal">{children}</ol>;
  };

  return (
    <ReactMarkdown
      components={{
        a,
        code,
        figure,
        img,
        ol,
        p,
        table: Table,
        thead: TableHead,
        th,
        td,
        ul,
      }}
      rehypePlugins={[MathJax, Raw]}
      remarkPlugins={[GitHub, Math]}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default Markdown;
