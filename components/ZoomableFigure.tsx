import React from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";

import "react-medium-image-zoom/dist/styles.css";

type Props = {
  src: string;
  alt?: string;
  caption?: string;
};

const ZoomableFigure: React.VFC<Props> = ({ src, alt, caption }) => {
  const url = new URL(src);
  const source = `${url.protocol}//${url.host}${url.pathname}`;
  const width = url.searchParams.get("width") ?? "500px";
  const height = url.searchParams.get("height") ?? "100%";

  console.log(source);

  return (
    <Zoom>
      <figure className="w-full my-4 text-center">
        <Image
          src={source}
          alt={alt ?? "image"}
          objectFit="contain"
          height={height}
          width={width}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
    </Zoom>
  );
};

export default ZoomableFigure;
