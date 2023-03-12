import React from "react";

import { cls } from "lib/cls";

type Props = {
  className?: string;
};

const Table: React.FC<Props> = ({ className, ...props }) => (
  <div className="my-6 w-full border-collapse overflow-y-auto border-slate-300">
    <table className={cls("w-full", className)} {...props} />
  </div>
);

const TableHead: React.FC<Props> = ({ className, ...props }) => (
  <thead className={cls("bg-zinc-100", className)} {...props} />
);

const TableHeader: React.FC<Props> = ({ className, ...props }) => (
  <th
    className={cls(
      "border border-slate-200 px-4 py-2 text-center font-bold",
      className
    )}
    {...props}
  />
);

const TableRow: React.FC<Props> = ({ className, ...props }) => (
  <tr
    className={cls(
      "m-0 border-t border-slate-300 p-0 even:bg-slate-100",
      className
    )}
    {...props}
  />
);

const TableData: React.FC<Props> = ({ className, ...props }) => (
  <td
    className={cls(
      "border border-slate-200 px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right",
      className
    )}
    {...props}
  />
);

export { Table, TableHead, TableHeader, TableRow, TableData };
