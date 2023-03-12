import React from "react";
import Footer from "./Footer";
import Header from "./Header";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen text-sakura-text-dark bg-sakura-bg">
      <div className="container min-h-screen mx-auto">
        <div className="min-h-screen mx-auto" style={{ maxWidth: "90%" }}>
          <div className="flex flex-col w-full min-h-screen">
            <Header />
            <div className="flex flex-grow w-full">{children}</div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
