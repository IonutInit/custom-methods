import { Concord } from "../types";

const concord: Concord = (num, str, plural = str + "s") => {
  if (num <= 0) return `no ${plural}`;
  return `${num} ${num === 1 ? str : plural}`;
};

export default concord;
