import { Concord } from "../types";
import ROUND_VALUES from "../constants/concordOptions";

import { concordError } from "../constants/errorMessages";

const concord: Concord = (
  num,
  str,
  plural = str + "s",
  { round = false } = {}
) => {
  const {
    err_NoStringNoNum,
    err_EmptyString,
    err_NoNum,
    err_ThirdParam,
    err_Round,
  } = concordError;

  if (
    (typeof num !== "number" && typeof num !== "string") ||
    typeof str !== "string"
  ) {
    throw new Error(err_NoStringNoNum);
  }

  // going a bit off-script to make the presence of the third argument not needed regardless of the rest of parameters
  if (
    plural !== null &&
    typeof plural === "object" &&
    plural.hasOwnProperty("round")
  ) {
    (round = plural.round), (plural = str + "s");
  } else {
    if (typeof plural !== "string") {
      throw new Error(err_ThirdParam);
    }
  }

  if (str.length === 0) {
    throw new Error(err_EmptyString);
  }

  if (typeof num === "string" && num.length === 0) {
    throw new Error(err_NoNum);
  }

  if (typeof num === "string") {
    num = Number(num);
  }

  if (!ROUND_VALUES.includes(round)) {
    throw new Error(err_Round);
  }

  if (round === -1) {
    num = Math.floor(num);
  } else if (round === true) {
    num = Math.round(num);
  } else if (round === 1) {
    num = Math.ceil(num);
  }

  if (num <= 0) return `no ${plural}`;
  return `${num} ${num === 1 ? str : plural}`;
};

export default concord;
