export type toObject<T> = {
  [Property: string]: T;
};

export const arrayToObject = <T>(data: T[], key: keyof T) => {
  if (typeof data[0][key] !== "string") {
    throw new Error("key must be a string");
  }

  const result: toObject<T> = data.reduce(
    (acc, item) => ({ ...acc, [`${item[key]}`]: item }),
    {}
  );

  return result;
};
