import React from "react";

import { cls } from "lib/cls";

type Props = {
  className?: string;
};

const Heading1: React.FC<Props> = ({ className, ...props }) => (
  <h1
    className={cls(
      "mt-2 scroll-m-20 text-4xl font-bold tracking-tight",
      className
    )}
    {...props}
  />
);

const Heading2: React.FC<Props> = ({ className, ...props }) => (
  <h2
    className={cls(
      "scroll-m20 mt-10 border-b border-b-slate-200 pb-1 text-3xl font-semibold tracking-tight first:mt-0",
      className
    )}
    {...props}
  />
);

const Heading3: React.FC<Props> = ({ className, ...props }) => (
  <h3
    className={cls(
      "mt-8 scroll-m-20 text-2xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

const Heading4: React.FC<Props> = ({ className, ...props }) => (
  <h4
    className={cls(
      "mt-8 scroll-m-20 text-xl font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

const Heading5: React.FC<Props> = ({ className, ...props }) => (
  <h5
    className={cls(
      "mt-8 scroll-m-20 text-lg font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

const Heading6: React.FC<Props> = ({ className, ...props }) => (
  <h6
    className={cls(
      "mt-8 scroll-m-20 text-base font-semibold tracking-tight",
      className
    )}
    {...props}
  />
);

export { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 };
