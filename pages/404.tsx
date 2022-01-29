import React from "react";

const NotFound: React.VFC = () => {
  return (
    <div
      className="flex justify-center items-center w-full"
      style={{ height: "calc(100vh - 65px - 129px)" }}
    >
      <div className="flex justify-center items-center mr-4 pr-4 h-16 border-r">
        <div className="text-4xl">404</div>
      </div>
      <div>This page could not be found</div>
    </div>
  );
};

export default NotFound;
