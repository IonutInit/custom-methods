"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === "object") || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toCommonJS = (mod) =>
  __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var custom_methods_exports = {};
__export(custom_methods_exports, {
  capitalize: () => capitalize_default,
  concord: () => concord_default,
  enumerate: () => enumerate_default,
  pipe: () => pipe_default,
  reduceText: () => reduceText_default,
});
module.exports = __toCommonJS(custom_methods_exports);

// constants/concordOptions.ts
var ROUND_VALUES = [-1, true, 1, false];
var concordOptions_default = ROUND_VALUES;

// constants/errorMessages.ts
var err_NoStr = "Input must be a string";
var err_NoStrNoNumAND = "Input must contain a string and a number";
var err_NoStrNoNumOR = "Input must contain strings and/or number";
var err_NoStrOrArr = "Input must be a string or an array of strings";
var err_EmptyStr = "The string provided is empty";
var err_EmptyArr = "The array provided must not be empty";
var err_NoNum = "The number required has been provided as an empty string";
var err_ThirdParam =
  "This accepts either a string as the plural form or an object with the rounding settings. See docs for details.";
var err_Round = "Round can take only the following values: -1, 1, true, false";
var err_StrArr = "The input must be an array of strings";
var err_Unique = "Unique must be a boolean";
var err_LimitTail = "Limit and tail must be positive numbers";
var warn_Tail = "Tail ignored as it is too large";
var err_NoArrNoNum = "Input must contain and array of numbers and a number";
var err_ParamsStr = "The optional parameters must be a string";
var warn_NoStyleOnArr = "Capitalization styles can only be applied to strings";
var concordError = {
  err_NoStrNoNumOR,
  err_EmptyStr,
  err_NoNum,
  err_ThirdParam,
  err_Round,
};
var capitalizeError = {
  err_NoStrOrArr,
  err_EmptyStr,
  err_EmptyArr,
  warn_NoStyleOnArr,
};
var enumerateError = {
  err_StrArr,
  warn_Tail,
  err_Unique,
  err_LimitTail,
};
var getIndexError = {
  err_NoStr,
};
var findNeighborError = {
  err_NoArrNoNum,
  err_EmptyArr,
};
var reduceTextError = {
  err_NoStrNoNumAND,
  err_EmptyStr,
  err_ParamsStr,
};

// src/concord.ts
var concord = (num, str, plural = str + "s", { round = false } = {}) => {
  const {
    err_NoStrNoNumOR: err_NoStrNoNumOR2,
    err_EmptyStr: err_EmptyStr2,
    err_NoNum: err_NoNum2,
    err_ThirdParam: err_ThirdParam2,
    err_Round: err_Round2,
  } = concordError;
  if (
    (typeof num !== "number" && typeof num !== "string") ||
    typeof str !== "string"
  ) {
    throw new Error(err_NoStrNoNumOR2);
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
    throw new Error(err_EmptyStr2);
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

// lib/getIndex.ts
var getIndex = (input, pattern = ".") => {
  const { err_NoStr: err_NoStr2 } = getIndexError;
  if (typeof input !== "string") {
    throw new Error(err_NoStr2);
  }
  const arr = [];
  const regex = new RegExp(`[${pattern}]`, "g");
  let match;
  while ((match = regex.exec(input)) !== null) {
    arr.push(match.index);
  }
  return arr;
};
var getIndex_default = getIndex;

// constants/stringEnd.ts
var STRING_END = ".?!";
var stringEnd_default = STRING_END;

// src/capitalize.ts
var capitalize = (input, { style = "all" } = {}) => {
  const {
    err_NoStrOrArr: err_NoStrOrArr2,
    err_EmptyStr: err_EmptyStr2,
    err_EmptyArr: err_EmptyArr2,
    warn_NoStyleOnArr: warn_NoStyleOnArr2,
  } = capitalizeError;
  if (style !== "all" && typeof input !== "string") {
    console.warn(warn_NoStyleOnArr2);
  }
  const doCap = (i) => i.charAt(0).toUpperCase() + i.slice(1);
  if (typeof input === "string") {
    if (input.length === 0) {
      throw new Error(err_EmptyStr2);
    }
    if (style !== "all") {
      const idxParams = style === "word" ? " " : stringEnd_default;
      const offset = style === "word" ? -1 : -2;
      const idxArr = getIndex_default(input, idxParams);
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
    if (!arrayPurity_default(input, "string")) {
      throw new Error(err_NoStrOrArr2);
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

// src/pipe.ts
var pipe = (...functions) => {
  if (functions.length === 0) return (input) => input;
  if (functions.length === 1) return (input) => functions[0](input);
  return function (input) {
    try {
      return functions.slice(1).reduce((acc, func) => {
        return func(acc);
      }, functions[0](input));
    } catch (error) {
      throw error;
    }
  };
};
var pipe_default = pipe;

// lib/findNeighbor.ts
var findNeighbor = (arr, num) => {
  const { err_NoArrNoNum: err_NoArrNoNum2, err_EmptyArr: err_EmptyArr2 } =
    findNeighborError;
  if (!arrayPurity_default(arr, "number") || typeof num !== "number") {
    throw new Error(err_NoArrNoNum2);
  }
  if (arr.length === 0) {
    throw new Error(err_EmptyArr2);
  }
  const index = arr
    .map((i) => Math.abs(i - num))
    .reduce((acc, val, idx, self) => {
      return val < self[acc] ? idx : acc;
    }, 0);
  return arr[index];
};
var findNeighbor_default = findNeighbor;

// src/reduceText.ts
var reduceText = (input, stop, params = stringEnd_default) => {
  const {
    err_NoStrNoNumAND: err_NoStrNoNumAND2,
    err_EmptyStr: err_EmptyStr2,
    err_ParamsStr: err_ParamsStr2,
  } = reduceTextError;
  if (typeof input !== "string" || typeof stop !== "number") {
    throw new Error(err_NoStrNoNumAND2);
  }
  if (input.length === 0) {
    throw new Error(err_EmptyStr2);
  }
  if (typeof params !== "string") {
    throw new Error(err_ParamsStr2);
  }
  const idx = getIndex_default(input, params);
  if (idx.length === 0) return input;
  const i = findNeighbor_default(idx, stop);
  input = input.slice(0, i + 1);
  return params === " " ? input.trim() : input;
};
var reduceText_default = reduceText;
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    capitalize,
    concord,
    enumerate,
    pipe,
    reduceText,
  });
