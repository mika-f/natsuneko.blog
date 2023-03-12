import React from "react";

import { useMDXComponent } from "next-contentlayer/hooks";

import { Code, Preformatted } from "./Code";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from "./Headings";
import { ListItem, OrderedList, UnorderedList } from "./List";
import { Paragraph } from "./Paragraph";
import { Table, TableData, TableHead, TableHeader, TableRow } from "./Table";
import { Hyperlink } from "./Hyperlink";

type Props = {
  markdown: string;
};

const components = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading5,
  h6: Heading6,
  p: Paragraph,
  a: Hyperlink,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  table: Table,
  thead: TableHead,
  th: TableHeader,
  tr: TableRow,
  td: TableData,
  pre: Preformatted,
  code: Code,
} as any;

const Markdown: React.FC<Props> = ({ markdown }) => {
  const Component = useMDXComponent(markdown);

  return <Component components={components} />;
};

export { Markdown };
