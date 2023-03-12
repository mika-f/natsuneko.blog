import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div className="w-full px-8 py-12 rounded-lg bg-sakura-secondary">
      {children}
    </div>
  );
};

export default Container;
