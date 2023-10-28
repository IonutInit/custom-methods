import arrayPurity from "./arrayPurity";

import { findNeighborError } from "../constants/errorMessages";

const findNeighbor = (arr: number[], num: number) => {
  const { err_NoArrNoNum, err_EmptyArr } = findNeighborError;

  if (!arrayPurity(arr, "number") || typeof num !== "number") {
    throw new Error(err_NoArrNoNum);
  }

  if (arr.length === 0) {
    throw new Error(err_EmptyArr);
  }

  const index = arr
    .map((i) => Math.abs(i - num))
    .reduce((acc: number, val: number, idx: number, self: number[]) => {
      return val < self[acc]! ? idx : acc;
    }, 0);

  return arr[index];
};

export default findNeighbor;
