import getIndex from "../lib/getIndex";
import findNeighbor from "../lib/findNeighbor";

import { ReduceText } from "../types";

import STRING_END from "../constants/stringEnd";

import { reduceTextError } from "../constants/errorMessages";

const reduceText: ReduceText = (input, stop, params = STRING_END) => {
  const { err_NoStrNoNumAND, err_EmptyStr, err_ParamsStr } = reduceTextError;

  if (typeof input !== "string" || typeof stop !== "number") {
    throw new Error(err_NoStrNoNumAND);
  }

  if (input.length === 0) {
    throw new Error(err_EmptyStr);
  }

  if (typeof params !== "string") {
    throw new Error(err_ParamsStr);
  }
  // finds indexes of all elements in the params
  const idx = getIndex(input, params);

  if (idx.length === 0) return input;

  // returns the index closest to the stop point
  const i = findNeighbor(idx, stop);

  // slices the input up to that point
  input = input.slice(0, i! + 1);

  // returns trimmed result if params is a blank space (i.e. the aim was to get words up to a certain stop)
  return params === " " ? input.trim() : input;
};

export default reduceText;
