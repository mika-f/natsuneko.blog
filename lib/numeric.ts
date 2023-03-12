const isNumberLike = (val: any): boolean => {
  return !Number.isNaN(parseInt(val));
};

export { isNumberLike };
