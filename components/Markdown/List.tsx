import React from "react";

import { cls } from "lib/cls";

type Props = {
  className?: string;
};

const UnorderedList: React.FC<Props> = ({ className, ...props }) => (
  <ul
    className={cls("group my-6 ml-6 list-disc group-[.my-6]:my-2", className)}
    {...props}
  />
);

const OrderedList: React.FC<Props> = ({ className, ...props }) => (
  <ol
    className={cls(
      "group my-6 ml-6 list-decimal group-[.my-6]:my-2",
      className
    )}
    {...props}
  />
);

const ListItem: React.FC<Props> = ({ className, ...props }) => (
  <li className={cls("mt-2", className)} {...props} />
);

export { UnorderedList, OrderedList, ListItem };
