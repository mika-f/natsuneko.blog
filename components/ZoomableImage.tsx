import React from "react";
import Zoom from "react-medium-image-zoom";
import Image from "next/image";

import "react-medium-image-zoom/dist/styles.css";

type Props = {
  src: string;
  alt?: string;
};

const ZoomableImage: React.VFC<Props> = ({ src, alt }) => {
  const url = new URL(src);
  const source = `${url.protocol}//${url.host}${url.pathname}`;
  const width = url.searchParams.get("width") ?? "500px";
  const height = url.searchParams.get("height") ?? "100%";

  return (
    <Zoom>
      <div className="w-full block my-4">
        <Image
          src={source}
          alt={alt ?? "image"}
          objectFit="contain"
          height={height}
          width={width}
        />
      </div>
    </Zoom>
  );
};

export default ZoomableImage;
