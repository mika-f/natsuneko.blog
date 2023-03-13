import { cls } from "lib/cls";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={cls(
        "w-full px-8 py-12 rounded-lg bg-season-primary",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
