import React from "react";

const TableHead: React.FC = ({ children }) => {
  return <thead className="bg-zinc-200/75">{children}</thead>;
};

export default TableHead;
