import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="text-zinc-300 bg-zinc-800  min-h-screen">
      <div className="container mx-auto min-h-screen">
        <div className="mx-auto min-h-screen" style={{ maxWidth: "90%" }}>
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
