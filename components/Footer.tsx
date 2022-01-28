import React from "react";

const START_YEAR = 2015;

const Footer: React.VFC<{}> = () => {
  const now = new Date().getFullYear();
  const year = START_YEAR === now ? START_YEAR : `${START_YEAR} - ${now}`;

  return (
    <footer className="text-center py-4">
      <p className="text-sm">
        Copyright (c) {year} Natsuneko &lt;me@natsuneko.cat&gt;
      </p>
    </footer>
  );
};

export default Footer;
