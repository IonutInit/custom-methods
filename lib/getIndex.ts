import { getIndexError } from "../constants/errorMessages";

const getIndex = (input: string, pattern: string = ".") => {
  const { err_NoStr } = getIndexError;

  if (typeof input !== "string") {
    throw new Error(err_NoStr);
  }

  const arr = [];

  const regex = new RegExp(`[${pattern}]`, "g");
  let match;

  while ((match = regex.exec(input)) !== null) {
    arr.push(match.index);
  }

  return arr;
};

export default getIndex;
