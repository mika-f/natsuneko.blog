import React from "react";

const Table: React.FC = ({ children }) => {
  return (
    <table className="table-auto border-collapse border-zinc-400 text-sm shadow-sm">
      {children}
    </table>
  );
};

export default Table;
