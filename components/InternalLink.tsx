import React from "react";
import Link from "next/link";
import { cls } from "lib/cls";

type Props = {
  href: string;
  hasUnderline?: boolean;
  className?: string;
  prefetch?: boolean;
  children: React.ReactNode;
};

const InternalLink: React.FC<Props> = ({
  className,
  href,
  children,
  prefetch,
  hasUnderline,
}) => {
  return (
    <Link
      prefetch={prefetch ? undefined : false}
      className={cls(
        "text-season-link",
        className,
        hasUnderline && "underline"
      )}
      href={href}
    >
      {children}
    </Link>
  );
};

export default InternalLink;
