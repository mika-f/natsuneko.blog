import React from "react";

type Props = {};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full px-8 py-12 rounded-lg bg-sakura-secondary">
      {children}
    </div>
  );
};

export default Container;
