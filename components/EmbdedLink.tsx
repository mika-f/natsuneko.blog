import React from "react";

type Props = {
  url: string;
};

const EmbedLink: React.VFC<Props> = ({ url }) => {
  return (
    <iframe
      src={`https://embedfy.natsuneko.moe/api/embed?url=${url}`}
      height={256}
      width={"100%"}
      frameBorder="0"
    ></iframe>
  );
};

export default EmbedLink;
