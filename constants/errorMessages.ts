const err_NoStringOrArr = "Input must be a string or an array of strings";
const err_EmptyString = "The string provided is empty";
const err_EmptyArr = "The array provided is empty";

// concord
const err_NoStringNoNum = "Input must contain strings and/or number";
const err_NoNum = "The number required has been provided as an empty string";
const err_ThirdParam =
  "This accepts either a string as the plural form or an object with the rounding settings. See docs for details.";
const err_Round =
  "Round can take only the following values: -1, 1, true, false";

// enumerate
const err_StrArr = "The input must be an array of strings";
const err_Unique = "Unique must be a boolean",
  err_LimitTail = "Limit and tail must be positive numbers";
const warn_Tail = "Tail is too large";

export const concordError = {
  err_NoStringNoNum,
  err_EmptyString,
  err_NoNum,
  err_ThirdParam,
  err_Round,
};

export const capitalizeError = {
  err_NoStringOrArr,
  err_EmptyString,
  err_EmptyArr,
};

export const enumerateError = {
  err_StrArr,
  warn_Tail,
  err_Unique,
  err_LimitTail,
};
