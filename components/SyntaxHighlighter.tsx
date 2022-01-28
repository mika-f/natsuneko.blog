import React from "react";
import { Prism as ReactSyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  language: string;
  filename?: string;
  content: string;
};

const SyntaxHighlighter: React.VFC<Props> = ({
  language,
  filename,
  content,
}) => {
  return (
    <div className="my-4">
      {filename && (
        <p
          style={{
            background: "rgb(30, 30, 30)",
            color: "rgb(212, 212, 212)",
            fontSize: "13px",
            padding: ".25em 1em",
            borderBottom: "1px solid rgb(106, 106, 106)",
            borderTopLeftRadius: "4px",
            borderTopRightRadius: "4px",
            width: "fit-content",
          }}
        >
          {filename}
        </p>
      )}
      <ReactSyntaxHighlighter style={vscDarkPlus} language={language}>
        {content}
      </ReactSyntaxHighlighter>
    </div>
  );
};

export default SyntaxHighlighter;
