import capitalize from "../src/capitalize";
import testIt from "../testIt";

import { capitalizeError } from "../constants/errorMessages";

const { err_NoStrOrArr, err_EmptyStr, err_EmptyArr, warn_NoStyleOnArr } =
  capitalizeError;

const errors = [
  [[5], err_NoStrOrArr],
  [[[5, "hello"]], err_NoStrOrArr],
  [[["hello", null]], err_NoStrOrArr],
  [[""], err_EmptyStr],
  [[[]], err_EmptyArr],
];

const stringTests = [
  [["hello"], "Hello"],
  [["hello, how are you"], "Hello, how are you"],
  [["Hello, how are you"], "Hello, how are you"],
];

const arrayTests = [
  [[["one"]], ["One"]],
  [[["one", "two", "three"]], ["One", "Two", "Three"]],
];

const styleCases = [
  [
    ["hello, how are you?", { style: "word" }],
    "Hello, How Are You?",
    { description: "returns capitalized words" },
  ],
  [
    ["hello. how are you? i'm fine. thank you!", { style: "sentence" }],
    "Hello. How are you? I'm fine. Thank you!",
    { description: "returns capitalized sentences" },
  ],
];

const warn = [
  [[["one", "two", "three"], { style: "words" }], warn_NoStyleOnArr],
];

testIt(capitalize, errors, {
  type: "error",
  description: "returns error if not provided a string or array of strings",
});

testIt(capitalize, stringTests, { description: "returns capitalized string" });

testIt(capitalize, arrayTests, {
  description: "returns each element of the array capitalized",
});

testIt(capitalize, styleCases);

testIt(capitalize, warn, { type: "warn", description: "Logs warning" });
