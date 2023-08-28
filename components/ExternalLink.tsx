import React from "react";

type Props = {
  href: string;
  hasUnderline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const ExternalLink: React.FC<Props> = ({
  className,
  href,
  children,
  hasUnderline,
}) => {
  const classNames: string[] = [className ?? "text-season-link"];
  if (hasUnderline) classNames.push("underline");

  classNames.push("break-words");

  const str = classNames.join(" ");

  return (
    <a className={str} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
