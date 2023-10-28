import { Capitalize } from "../types";
import arrayPurity from "../lib/arrayPurity";
import getIndex from "../lib/getIndex";
import STRING_END from "../constants/stringEnd";
import { capitalizeError } from "../constants/errorMessages";

const capitalize: Capitalize = (input, { style = "all" } = {}) => {
  const { err_NoStrOrArr, err_EmptyStr, err_EmptyArr, warn_NoStyleOnArr } =
    capitalizeError;

  if (style !== "all" && typeof input !== "string") {
    console.warn(warn_NoStyleOnArr);
  }

  const doCap = (i: string) => i.charAt(0).toUpperCase() + i.slice(1);

  // style block
  if (typeof input === "string") {
    if (input.length === 0) {
      throw new Error(err_EmptyStr);
    }

    if (style !== "all") {
      // establishes the parameters of getIndex
      // "words" presupposes blank space as the split point
      // "sentence" presupposes the STRING_END characters
      const idxParams = style === "word" ? " " : STRING_END;

      // establishes the actual index at which the character to be capitalized (presupposes one char after blank space, two after sentence end)
      const offset = style === "word" ? -1 : -2;

      const idxArr = getIndex(input, idxParams);

      // first letter is not present in idxArr, so it is added to serve as idx 0
      idxArr.unshift(offset);

      return input
        .split("")
        .map((char, index) => {
          return (input = idxArr.includes(index + offset)
            ? char.toLocaleUpperCase()
            : char);
        })
        .join("");
    }

    return doCap(input);
  } else {
    if (!arrayPurity(input as unknown as string[], "string")) {
      throw new Error(err_NoStrOrArr);
    } else if (input.length === 0) {
      throw new Error(err_EmptyArr);
    }
    return input.map((s) => doCap(s));
  }
};

export default capitalize;
