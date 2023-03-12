import React from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";

import "react-medium-image-zoom/dist/styles.css";
import { isNumberLike } from "lib/numeric";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
};

const ZoomableFigure: React.VFC<Props> = ({ src, alt, caption }) => {
  const url = new URL(src);
  const source = `${url.protocol}//${url.host}${url.pathname}`;
  const width = isNumberLike(url.searchParams.get("width"))
    ? (url.searchParams.get("width") as `${number}`)
    : "500";
  const height = isNumberLike(url.searchParams.get("height"))
    ? (url.searchParams.get("height") as `${number}`)
    : undefined;

  return (
    <Zoom wrapStyle={{ width: "100%" }}>
      <figure className="w-full my-4 text-center">
        <Image
          src={source}
          alt={alt ?? "image"}
          style={{ objectFit: "contain", height: "100%" }}
          height={height}
          width={width}
        />
        {caption ? <figcaption>{caption}</figcaption> : <></>}
      </figure>
    </Zoom>
  );
};

export default ZoomableFigure;
