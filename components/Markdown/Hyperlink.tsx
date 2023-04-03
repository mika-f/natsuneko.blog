import EmbedLink from "components/EmbdedLink";
import EmbedTitleLink from "components/EmbdedTitleLink";
import ExternalLink from "components/ExternalLink";
import React from "react";

type Props = {
  href: string;
  children?: React.ReactNode;
};

const Hyperlink: React.FC<Props> = ({ href, children }) => {
  if (href.endsWith(":title")) {
    return (
      <EmbedTitleLink url={href.substring(0, href.lastIndexOf(":title"))} />
    );
  }

  if (href.endsWith(":embed")) {
    return <EmbedLink url={href.substring(0, href.lastIndexOf(":title"))} />;
  }

  return (
    <ExternalLink href={href} hasUnderline>
      {children ?? href}
    </ExternalLink>
  );
};

export { Hyperlink };
