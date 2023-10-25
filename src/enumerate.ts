import { Enumerate } from "../types";
import arrayPurity from "../lib/arrayPurity";

import { enumerateError } from "../constants/errorMessages";

const enumerate: Enumerate = (
  input,
  { unique = false, limit = 0, tail = 0 } = {}
) => {
  const { err_StrArr, warn_Tail, err_Unique, err_LimitTail } = enumerateError;

  if (!arrayPurity(input, "string")) {
    throw new Error(err_StrArr);
  }

  if (typeof unique !== "boolean") {
    throw new Error(err_Unique);
  }

  if (
    typeof limit !== "number" ||
    limit < 0 ||
    typeof tail !== "number" ||
    tail < 0
  ) {
    throw new Error(err_LimitTail);
  }

  const arr = unique ? [...new Set(input)] : input;

  let result = "";

  if (limit > 0) {
    const head = arr.slice(0, limit);
    let etc = "... ";

    if (tail === 0 || limit + tail > arr.length || tail > limit) {
      return head.join(", ") + (limit < arr.length ? etc.trim() : "");
    } else {
      const end = arr.slice(tail * -1);
      if (tail >= limit - 1 && limit + tail >= arr.length) {
        etc = ", ";
      }
      console.warn(warn_Tail);
      return head.join(", ") + etc + end.join(", ");
    }
  }

  const lastTwoElements = arr.slice(-2).join(" and ");
  const remainingElements = arr.slice(0, -2);
  result = [...remainingElements, lastTwoElements].join(", ").toLowerCase();

  return result;
};

export default enumerate;
