import React from "react";

type Props = {
  align?: "left" | "center" | "right";
};

const TableHeader: React.FC<Props> = ({ children, align }) => {
  align = align || "left";

  return (
    <th
      className={`border border-zinc-400 font-semibold p-4 text-slate-900 text-${align}`}
    >
      {children}
    </th>
  );
};

export default TableHeader;
