import React from "react";

type Props = {
  href: string;
  hasUnderline?: boolean;
  className?: string;
};

const ExternalLink: React.FC<Props> = ({
  className,
  href,
  children,
  hasUnderline,
}) => {
  const classNames: string[] = [className];
  if (hasUnderline) classNames.push("underline");

  const str = classNames.join(" ");

  return (
    <a className={str} href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default ExternalLink;
