import React from "react";

type Props = {
  align?: string;
};

const TableData: React.FC<Props> = ({ children, align }) => {
  align = align || "left";

  return (
    <td className={`border border-zinc-400 p-4 text-${align}`}>{children}</td>
  );
};

export default TableData;
