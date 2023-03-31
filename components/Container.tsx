import { cls } from "lib/cls";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cls("w-full px-8 pt-6 pb-12 rounded-lg", className)}>
      {children}
    </div>
  );
};

export default Container;
