import React from "react";
import axios from "axios";
import useSWR from "swr";
import ExternalLink from "./ExternalLink";

type Props = {
  url: string;
};

const EmbedTitleLink: React.VFC<Props> = ({ url }) => {
  const { data, error } = useSWR(
    `https://embedfy.natsuneko.moe/api/title?url=${url}`,
    axios
  );

  if (data) {
    return (
      <div>
        <ExternalLink href={url}>{data.data.title}</ExternalLink>
      </div>
    );
  }

  return <ExternalLink href={url}>{url}</ExternalLink>;
};

export default EmbedTitleLink;
