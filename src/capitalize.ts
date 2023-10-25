import { Capitalize } from "../types";
import arrayPurity from "../lib/arrayPurity";
import { capitalizeError } from "../constants/errorMessages";

const capitalize: Capitalize = (input) => {
  const { err_NoStringOrArr, err_EmptyString, err_EmptyArr } = capitalizeError;

  const doCap = (i: string) => i.charAt(0).toUpperCase() + i.slice(1);

  if (typeof input === "string") {
    if (input.length === 0) {
      throw new Error(err_EmptyString);
    }
    return doCap(input);
  } else {
    if (!arrayPurity(input as unknown as string[], "string")) {
      throw new Error(err_NoStringOrArr);
    } else if (input.length === 0) {
      throw new Error(err_EmptyArr);
    }
    return input.map((s) => doCap(s));
  }
};

export default capitalize;
