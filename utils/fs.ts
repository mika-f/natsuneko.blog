import { readFileSync } from "fs";
import fs from "fs/promises";
import { join } from "path";
import matter from "gray-matter";
import { remark } from "remark";
import strip from "strip-markdown";

const CONTENTS_DIR = join(process.cwd(), "contents");

type Content = {
  title: string;
  date: string;
  basename: string;
  categories: string[];
  content: string;
  summary: string;
};

type Redirect = {
  from: string;
  to: string;
};

const getEntries = async (
  count?: number,
  offset: number = 0
): Promise<Content[]> => {
  const files = await fs.readdir(CONTENTS_DIR, { withFileTypes: true });
  const entries = files
    .filter((w) => w.isFile() && w.name.endsWith(".md"))
    .filter((w) => !w.name.endsWith("TEMPLATE.md"))
    .map((w) => getContent(w.name, ""));

  return count ? entries.slice(-count * (offset + 1)) : entries;
};

const getRedirects = async (): Promise<Redirect[]> => {
  const content = await fs.readFile(
    join(CONTENTS_DIR, "redirects.json"),
    "utf8"
  );
  return JSON.parse(content) as Redirect[];
};

const getContent = (path: string, extension = ".md"): Content => {
  const fileContents = readFileSync(
    join(CONTENTS_DIR, `${path}${extension}`),
    "utf8"
  );
  const { data, content } = matter(fileContents);

  const getSummarizedText = (markdown: string) => {
    const text = remark().use(strip).processSync(markdown).toString();
    const firstSentence = text.indexOf("。");
    if (firstSentence <= 120) {
      return text.substring(0, firstSentence + 1);
    }

    return text.substring(0, 120) + "...";
  };

  return {
    title: data.title,
    date: data.date,
    basename: data.basename,
    categories: data.categories ?? [],
    content,
    summary: data.summary ?? getSummarizedText(content),
  };
};

const getRedirect = async (from: string): Promise<Redirect> => {
  const redirects = await getRedirects();
  return redirects.find((w) => w.from === from);
};

export { getEntries, getContent, getRedirect, getRedirects };
