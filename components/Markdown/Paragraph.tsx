import React from "react";

import { cls } from "lib/cls";

type Props = {
  className?: string;
};

const Paragraph: React.FC<Props> = ({ className, ...props }) => (
  <p
    className={cls("leading-6 [&:not(:first-child)]:mt-6", className)}
    {...props}
  />
);

export { Paragraph };
