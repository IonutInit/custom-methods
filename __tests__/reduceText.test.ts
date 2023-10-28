import reduceText from "../src/reduceText";
import testIt from "../testIt";

import { reduceTextError } from "../constants/errorMessages";

const { err_NoStrNoNumAND, err_EmptyStr, err_ParamsStr } = reduceTextError;

const errors = [
  [[null, 10], err_NoStrNoNumAND],
  [[10, ""], err_NoStrNoNumAND],
  [["", 10], err_EmptyStr],
  [["hello. how are you? I'm fine!", 10, 5], err_ParamsStr],
  [["hello. how are you? I'm fine!", 10, [".!"]], err_ParamsStr],
];

const cases = [
  [["hello. how are you? I'm fine!", 14], "hello. how are you?"],
  [
    ["hello. how are you? I'm fine!", -14],
    "hello.",
    {
      description:
        "returns the string up to the first param if stop is negative",
    },
  ],
  [
    ["hello how are you I'm fine", 1],
    "hello how are you I'm fine",
    {
      description:
        "returns the entire input in params are not present in input",
    },
  ],
  [["hello. how are you? I'm fine!", 1, "?"], "hello. how are you?"],
  [["hello. how are you? I'm fine!", 1, "!"], "hello. how are you? I'm fine!"],
  [
    ["hello. how are you? I'm fine!", 1, " "],
    "hello.",
    { description: "returns trimmed result if params are a blank space" },
  ],
  [
    ["hello. how are you? I'm fine!", 20, " "],
    "hello. how are you?",
    ,
    { description: "returns trimmed result if params are a blank space" },
  ],
  [
    ["hello. how are you? I'm fine!", 1, ""],
    "hello. how are you? I'm fine!",
    { description: "returns entire input if params are an empty string" },
  ],
];

testIt(reduceText, errors, {
  type: "error",
  description: "returns the correct error",
});

testIt(reduceText, cases, {
  description:
    "returns the correctly reduced string, according to the parameters provided",
});
