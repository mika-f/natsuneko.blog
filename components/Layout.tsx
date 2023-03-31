import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";
import InternalLink from "./InternalLink";
import ExternalLink from "./ExternalLink";

type Props = {
  children?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen text-season-text bg-season-primary">
      <div className="container min-h-screen mx-auto">
        <div className="min-h-screen mx-auto" style={{ maxWidth: "90%" }}>
          <div className="flex flex-col w-full min-h-screen">
            <Header />
            <Container className="bg-season-background">
              <ul className="flex flex-grow w-full flex-wrap gap-x-4 gap-y-2 mb-8">
                <li>
                  <InternalLink hasUnderline href="/categories">
                    カテゴリー一覧
                  </InternalLink>
                </li>
                <li>
                  <InternalLink hasUnderline href="/about">
                    このサイトについて
                  </InternalLink>
                </li>
                <li>
                  <ExternalLink
                    hasUnderline
                    href="https://www.google.com/search?q=site:www.natsuneko.blog"
                  >
                    検索
                  </ExternalLink>
                </li>
              </ul>
              <div className="w-full">{children}</div>
            </Container>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
