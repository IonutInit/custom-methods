import capitalize from "../src/capitalize";
import testIt from "../testIt";

import { capitalizeError } from "../constants/errorMessages";

const { err_NoStringOrArr, err_EmptyString, err_EmptyArr } = capitalizeError;

const errors = [
  [[5], err_NoStringOrArr, { type: "error" }],
  [[[5, "hello"]], err_NoStringOrArr, { type: "error" }],
  [[["hello", null]], err_NoStringOrArr, { type: "error" }],
  [[""], err_EmptyString, { type: "error" }],
  [[[]], err_EmptyArr, { type: "error" }],
];

const stringTests = [
  [["hello"], "Hello"],
  [["hello, how are you"], "Hello, how are you"],
  [["Hello, how are you"], "Hello, how are you"],
];

const arrayTests = [[[["one", "two", "three"]], ["One", "Two", "Three"]]];

testIt(capitalize, errors, {
  description: "returns error if not provided a string or array of strings",
});

testIt(capitalize, stringTests, { description: "returns capitalized string" });

testIt(capitalize, arrayTests, {
  description: "returns each element of the array capitalized",
});
