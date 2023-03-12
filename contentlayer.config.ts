import {
  ComputedFields,
  defineDocumentType,
  defineNestedType,
  makeSource,
} from "contentlayer/source-files";

import RehypeCodeTitles from "rehype-code-titles";
import RehypePrettyCode from "rehype-pretty-code";
import RehypeRaw from "rehype-raw";
import RehypeMathJax from "rehype-mathjax";
import { remark } from "remark";
import RemarkGfm from "remark-gfm";
import RemarkMath from "remark-math";

import strip from "strip-markdown";

const getSummarizedText = (markdown: string) => {
  const text = remark()
    .use(strip)
    .processSync(markdown)
    .toString()
    .replaceAll(/\s{2,}/gm, " ")
    .replaceAll(/\n/gm, "");

  const firstSentence = text.indexOf("。");
  if (100 <= firstSentence && firstSentence <= 120) {
    return text.substring(0, firstSentence + 1);
  }

  return text.substring(0, 120) + "...";
};

const computedFields: ComputedFields = {
  summary: {
    type: "string",
    resolve: (doc) => {
      return getSummarizedText(doc.body.raw);
    },
  },
};

const Article = defineDocumentType(() => ({
  name: "Article",
  filePathPattern: "**/*.md",
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    date: { type: "string", required: true },
    basename: { type: "string", required: true },
    categories: { type: "list", default: [], of: { type: "string" } },
  },
  computedFields,
}));

const Redirect = defineNestedType(() => ({
  name: "Redirect",
  fields: {
    from: { type: "string", required: true },
    to: { type: "string", required: true },
  },
}));

const Redirects = defineDocumentType(() => ({
  name: "Redirects",
  filePathPattern: "redirects.json",
  contentType: "data",
  fields: {
    redirects: { type: "list", default: [], of: Redirect },
  },
}));

export default makeSource({
  contentDirPath: "./contents",
  documentTypes: [Article, Redirects],
  mdx: {
    remarkPlugins: [RemarkGfm, RemarkMath],
    rehypePlugins: [
      RehypeMathJax,
      [
        RehypeRaw,
        {
          passThrough: [
            "mdxjsEsm",
            "mdxJsxTextElement",
            "mdxJsxFlowElement",
            "mdxTextExpression",
          ],
        },
      ],
      [
        RehypeCodeTitles,
        {
          titleSeparator: ":",
        },
      ],
      [
        RehypePrettyCode,
        {
          theme: "dark-plus",
        },
      ],
    ],
  },
});
