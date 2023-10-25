import arrayPurity from "../arrayPurity";
import testIt from "../../testIt";

const positiveCases = [
  [[[1, 2, 3], "number"], true],
  [[["a", "b", "c"], "string"], true],
  [[[[1, 1], ["a"]], "object"], true],
  [
    [
      [
        [1, "a"],
        ["a", 1],
      ],
      "object",
    ],
    true,
  ],
  [[[null, null, null], "object"], true],
  [[[{}, {}, {}], "object"], true],
  [[[null, null, {}], "object"], true],
];

const negativeCases = [
  [[[1, 2, "a"], "number"], false],
  [[["a", "b", 1], "string"], false],
  [[[[1, 1], ["a"], 1], "object"], false],
];

testIt(arrayPurity, positiveCases, {
  description: "returns true for pure flat arrays",
});
testIt(arrayPurity, negativeCases, {
  description: "returns false for pure flat arrays",
});
