// constants/concordOptions.ts
var ROUND_VALUES = [-1, true, 1, false];
var concordOptions_default = ROUND_VALUES;

// constants/errorMessages.ts
var err_NoStringOrArr = "Input must be a string or an array of strings";
var err_EmptyString = "The string provided is empty";
var err_EmptyArr = "The array provided is empty";
var err_NoStringNoNum = "Input must contain strings and/or number";
var err_NoNum = "The number required has been provided as an empty string";
var err_ThirdParam =
  "This accepts either a string as the plural form or an object with the rounding settings. See docs for details.";
var err_Round = "Round can take only the following values: -1, 1, true, false";
var err_StrArr = "The input must be an array of strings";
var err_Unique = "Unique must be a boolean";
var err_LimitTail = "Limit and tail must be positive numbers";
var warn_Tail = "Tail is too large";
var concordError = {
  err_NoStringNoNum,
  err_EmptyString,
  err_NoNum,
  err_ThirdParam,
  err_Round,
};
var capitalizeError = {
  err_NoStringOrArr,
  err_EmptyString,
  err_EmptyArr,
};
var enumerateError = {
  err_StrArr,
  warn_Tail,
  err_Unique,
  err_LimitTail,
};

// src/concord.ts
var concord = (num, str, plural = str + "s", { round = false } = {}) => {
  const {
    err_NoStringNoNum: err_NoStringNoNum2,
    err_EmptyString: err_EmptyString2,
    err_NoNum: err_NoNum2,
    err_ThirdParam: err_ThirdParam2,
    err_Round: err_Round2,
  } = concordError;
  if (
    (typeof num !== "number" && typeof num !== "string") ||
    typeof str !== "string"
  ) {
    throw new Error(err_NoStringNoNum2);
  }
  if (
    plural !== null &&
    typeof plural === "object" &&
    plural.hasOwnProperty("round")
  ) {
    (round = plural.round), (plural = str + "s");
  } else {
    if (typeof plural !== "string") {
      throw new Error(err_ThirdParam2);
    }
  }
  if (str.length === 0) {
    throw new Error(err_EmptyString2);
  }
  if (typeof num === "string" && num.length === 0) {
    throw new Error(err_NoNum2);
  }
  if (typeof num === "string") {
    num = Number(num);
  }
  if (!concordOptions_default.includes(round)) {
    throw new Error(err_Round2);
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
var concord_default = concord;

// lib/arrayPurity.ts
var arrayPurity = (input, type) => {
  if (!Array.isArray(input) || input.some((i) => typeof i !== type))
    return false;
  return true;
};
var arrayPurity_default = arrayPurity;

// src/capitalize.ts
var capitalize = (input) => {
  const {
    err_NoStringOrArr: err_NoStringOrArr2,
    err_EmptyString: err_EmptyString2,
    err_EmptyArr: err_EmptyArr2,
  } = capitalizeError;
  const doCap = (i) => i.charAt(0).toUpperCase() + i.slice(1);
  if (typeof input === "string") {
    if (input.length === 0) {
      throw new Error(err_EmptyString2);
    }
    return doCap(input);
  } else {
    if (!arrayPurity_default(input, "string")) {
      throw new Error(err_NoStringOrArr2);
    } else if (input.length === 0) {
      throw new Error(err_EmptyArr2);
    }
    return input.map((s) => doCap(s));
  }
};
var capitalize_default = capitalize;

// src/enumerate.ts
var enumerate = (input, { unique = false, limit = 0, tail = 0 } = {}) => {
  const {
    err_StrArr: err_StrArr2,
    warn_Tail: warn_Tail2,
    err_Unique: err_Unique2,
    err_LimitTail: err_LimitTail2,
  } = enumerateError;
  if (!arrayPurity_default(input, "string")) {
    throw new Error(err_StrArr2);
  }
  if (typeof unique !== "boolean") {
    throw new Error(err_Unique2);
  }
  if (
    typeof limit !== "number" ||
    limit < 0 ||
    typeof tail !== "number" ||
    tail < 0
  ) {
    throw new Error(err_LimitTail2);
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
      console.warn(warn_Tail2);
      return head.join(", ") + etc + end.join(", ");
    }
  }
  const lastTwoElements = arr.slice(-2).join(" and ");
  const remainingElements = arr.slice(0, -2);
  result = [...remainingElements, lastTwoElements].join(", ").toLowerCase();
  return result;
};
var enumerate_default = enumerate;
export {
  capitalize_default as capitalize,
  concord_default as concord,
  enumerate_default as enumerate,
};
