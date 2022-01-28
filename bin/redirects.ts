import fs from "fs/promises";
import { parse } from "mt-parser";
import matter from "gray-matter";

import { command, string } from "yargs";

const argv = command(
  "* <source> <dest>",
  "Convert Movable Type to Markdown",
  (builder) =>
    builder
      .positional("source", {
        type: "string",
        describe: "Path to Movable Type file",
      })
      .positional("dest", {
        type: "string",
        describe: "Path to Markdown directory",
      })
).demandCommand(2).argv;

const isExists = async (path: string) => {
  try {
    return (await fs.lstat(path)).isFile();
  } catch (_) {
    return false;
  }
};

const formatDate = (date: number, delimiter: string = "/") => {
  const d = new Date(date * 1000 - 32400 * 1000);

  // prettier-ignore
  return `${d.getFullYear()}${delimiter}${(d.getMonth() + 1).toString().padStart(2, "0")}${delimiter}${d.getDate().toString().padStart(2, "0")}`;
};

const main = async ({ source, dest }: { source: string; dest: string }) => {
  const data = await fs.readFile(source, "utf8");
  const entries = parse(data);

  const redirects = [];

  for (const entry of entries) {
    const { basename, date } = entry;
    const filename = `${dest}/${formatDate(date, "")}.md`;

    if (await isExists(filename)) {
      const content = await fs.readFile(filename, "utf8");
      const { data } = matter(content);

      redirects.push({ from: basename, to: data.basename });
    }
  }

  await fs.writeFile(
    `${dest}/redirects.json`,
    JSON.stringify(redirects, null, 2)
  );
};

const parseArgs = async () => await argv;

parseArgs().then((w) => main({ source: w.source, dest: w.dest }));
