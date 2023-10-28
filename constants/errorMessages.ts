const err_NoStr = "Input must be a string";
const err_NoStrNoNumAND = "Input must contain a string and a number";
const err_NoStrNoNumOR = "Input must contain strings and/or number";
const err_NoStrOrArr = "Input must be a string or an array of strings";
const err_EmptyStr = "The string provided is empty";
const err_EmptyArr = "The array provided must not be empty";

// concord
const err_NoNum = "The number required has been provided as an empty string";
const err_ThirdParam =
  "This accepts either a string as the plural form or an object with the rounding settings. See docs for details.";
const err_Round =
  "Round can take only the following values: -1, 1, true, false";

// enumerate
const err_StrArr = "The input must be an array of strings";
const err_Unique = "Unique must be a boolean";
const err_LimitTail = "Limit and tail must be positive numbers";
const warn_Tail = "Tail ignored as it is too large";

// lib/findNeighbor
const err_NoArrNoNum = "Input must contain and array of numbers and a number";

// reduceText
const err_ParamsStr = "The optional parameters must be a string";

// capitalize
const warn_NoStyleOnArr =
  "Capitalization styles can only be applied to strings";

export const concordError = {
  err_NoStrNoNumOR,
  err_EmptyStr,
  err_NoNum,
  err_ThirdParam,
  err_Round,
};

export const capitalizeError = {
  err_NoStrOrArr,
  err_EmptyStr,
  err_EmptyArr,
  warn_NoStyleOnArr,
};

export const enumerateError = {
  err_StrArr,
  warn_Tail,
  err_Unique,
  err_LimitTail,
};

// lib/getIndex
export const getIndexError = {
  err_NoStr,
};

// lib/findNeighbor
export const findNeighborError = {
  err_NoArrNoNum,
  err_EmptyArr,
};

export const reduceTextError = {
  err_NoStrNoNumAND,
  err_EmptyStr,
  err_ParamsStr,
};
