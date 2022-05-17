import React, { useEffect, useRef } from "react";

type Props = {
  url: string;
};

const EmbedLink: React.VFC<Props> = ({ url }) => {
  const ref = useRef<HTMLIFrameElement>(undefined);

  useEffect(() => {
    const onMessageReceived = (msg: MessageEvent<any>) => {
      const data = msg.data;
      if (data[0] === "onload" && data[1] === url) {
        ref.current.height = `${data[2]}`;
      }
    };

    window.addEventListener("message", onMessageReceived);

    return () => window.removeEventListener("message", onMessageReceived);
  });

  return (
    <iframe
      src={`https://embedfy.natsuneko.moe/api/embed?url=${url}`}
      height={"200px"}
      width={"100%"}
      frameBorder="0"
      scrolling="no"
      ref={ref}
    ></iframe>
  );
};

export default EmbedLink;
