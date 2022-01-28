import React from "react";

const InlineCode: React.FC = ({ children }) => {
  return (
    <code
      style={{
        color: "rgb(212, 212, 212)",
        background: "rgb(30, 30, 30)",
        fontSize: "0.9em",
        padding: ".25em .5em",
        whiteSpace: "pre",
        borderRadius: ".25em",
      }}
    >
      {children}
    </code>
  );
};

export default InlineCode;
