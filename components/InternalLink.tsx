import React from "react";
import Link from "next/link";

type Props = {
  href: string;
  hasUnderline?: boolean;
  className?: string;
  children: React.ReactNode;
};

const InternalLink: React.FC<Props> = ({
  className,
  href,
  children,
  hasUnderline,
}) => {
  const classNames: string[] = [className ?? "text-season-link"];
  if (hasUnderline) classNames.push("underline");

  const str = classNames.join(" ");

  return (
    <Link className={str} href={href}>
      {children}
    </Link>
  );
};

export default InternalLink;
