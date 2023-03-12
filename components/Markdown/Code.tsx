import React from "react";

import { cls } from "lib/cls";

type Props = {
  className?: string;
};

const Code: React.FC<Props> = ({ className, ...props }) => (
  <code
    className={cls(
      "relative rounded bg-slate-900 break-words py-[0.2rem] px-[0.3rem] font-mono text-sm text-slate-300 group-[.code]:grid group-[.code]:min-w-full group-[.code]:break-words group-[.code]:rounded-none group-[.code]:border-0 group-[.code]:bg-transparent group-[.code]:px-4",
      className
    )}
    {...props}
  />
);

const Preformatted: React.FC<Props> = ({ className, ...props }) => (
  <pre
    className={cls(
      "code group mt-6 mb-4 overflow-x-auto bg-slate-900 py-2",
      className
    )}
    {...props}
  />
);

export { Code, Preformatted };
