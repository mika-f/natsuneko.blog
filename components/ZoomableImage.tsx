import React from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";

import "react-medium-image-zoom/dist/styles.css";
import { isNumberLike } from "lib/numeric";

type Props = {
  src: string;
  alt?: string;
};

const ZoomableImage: React.VFC<Props> = ({ src, alt }) => {
  const url = new URL(src);
  const source = `${url.protocol}//${url.host}${url.pathname}`;
  const width = isNumberLike(url.searchParams.get("width"))
    ? (url.searchParams.get("width") as `${number}`)
    : "500";
  const height = isNumberLike(url.searchParams.get("height"))
    ? (url.searchParams.get("height") as `${number}`)
    : undefined;

  return (
    <Zoom>
      <div className="w-full block my-4 text-center">
        <Image
          src={source}
          alt={alt ?? "image"}
          style={{ objectFit: "contain", height: "100%" }}
          height={height}
          width={width}
        />
      </div>
    </Zoom>
  );
};

export default ZoomableImage;
