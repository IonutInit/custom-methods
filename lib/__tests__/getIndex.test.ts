import getIndex from "../getIndex";
import testIt from "../../testIt";

import { getIndexError } from "../../constants/errorMessages";
const { err_NoStr } = getIndexError;

const errors = [[[5]], [[5, "5"]], [[{ a: 2 }]]];

const stringsCases = [
  [["."], [0], { description: "returns correct default" }],
  [["!", "!"], [0], { description: "returns correct custom default" }],
  [["!?", "?"], [1], { description: "returns correct custom default" }],
  [["!?", "!?"], [0, 1], { description: "returns correct custom default" }],
  [[".!", "!"], [1], { description: "returns correct custom default" }],
  [["hello."], [5]],
  [["hello!", "!"], [5]],
  [
    ["hello! how are you?", "!?"],
    [5, 18],
  ],
  [["good, thank you."], [15]],
  [["?.!?!."], [1, 5]],
  [
    ["?.!?!.", "!"],
    [2, 4],
  ],
  [
    ["?.!?!.", "!?"],
    [0, 2, 3, 4],
  ],
  [
    ["no match in sight", "!?"],
    [],
    { description: "returns an empty array if no pattern is matched" },
  ],
  [
    ["no match in sight"],
    [],
    { description: "returns an empty array if no pattern is matched" },
  ],
  [[""], [], { description: "returns an empty array if passed empty string" }],
  [
    ["", "!"],
    [],
    { description: "returns an empty array if passed empty string" },
  ],
];

testIt(getIndex, errors, {
  type: "error",
  description: err_NoStr,
});

testIt(getIndex, stringsCases, {
  description: "returns the string indexes for each element in pattern",
});
