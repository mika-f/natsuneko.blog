import fs from "fs/promises";
import { parse } from "mt-parser";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import { command } from "yargs";

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
  const service = new TurndownService({
    hr: "----",
    codeBlockStyle: "fenced",
    fence: "```",
  });
  service.use(gfm);
  service.addRule("fencedCodeBlock", {
    filter: function (node, options) {
      return (
        options.codeBlockStyle === "fenced" &&
        node.nodeName === "PRE" &&
        node.firstChild &&
        node.firstChild.nodeName !== "CODE"
      );
    },

    replacement: function (content, node, options) {
      var dataset = (node as any)._attrsByQName["data-lang"];
      var language = dataset?.data ?? "";

      return (
        "\n\n" +
        options.fence +
        language +
        "\n" +
        node.firstChild.textContent +
        "\n" +
        options.fence +
        "\n\n"
      );
    },
  });

  const data = await fs.readFile(source, "utf8");
  const entries = parse(data);

  for (const entry of entries) {
    const { title, basename, date, categories, body, extendedBody } = entry;
    const content = [...body, ...(extendedBody ?? [])].join("\n");
    const filename = `${dest}/${formatDate(date, "")}.md`;
    const header = `
---
title: ${title}
date: ${formatDate(date)}
basename: ${basename}
categories: [${(categories ?? []).map((w) => `"${w}"`).join(",")}]
---
`;
    const markdown = service.turndown(content);

    const isAlreadyExists = await isExists(filename);

    if (!isAlreadyExists)
      await fs.writeFile(filename, `${header}\n${markdown}`);
  }
};

const parseArgs = async () => await argv;

parseArgs().then((w) => main({ source: w.source, dest: w.dest }));
