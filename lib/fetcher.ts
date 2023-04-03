const fetcher = (args: any) => {
  return fetch(args).then((r) => r.json());
};

// eslint-disable-next-line import/prefer-default-export
export { fetcher };
