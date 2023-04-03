import React from "react";
import useSWR from "swr/immutable";
import ExternalLink from "./ExternalLink";

import { fetcher } from "lib/fetcher";

type Props = {
  url: string;
};

const EmbedTitleLink: React.FC<Props> = ({ url }) => {
  const { data, error } = useSWR(
    `https://embedfy.natsuneko.moe/api/title?url=${url}`,
    fetcher
  );

  if (data) {
    return <ExternalLink href={url}>{data.title}</ExternalLink>;
  }

  return <ExternalLink href={url}>{url}</ExternalLink>;
};

export default EmbedTitleLink;
