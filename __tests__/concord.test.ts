import concord from "../src/concord";
import testIt from "../testIt";

import { concordError } from "../constants/errorMessages";

const { err_NoStrNoNumOR, err_EmptyStr, err_NoNum, err_ThirdParam, err_Round } =
  concordError;

const errorCases = [
  [[null, "item"], err_NoStrNoNumOR],
  [[{}, "item"], err_NoStrNoNumOR],
  [[5, {}], err_NoStrNoNumOR],
  [["0", ""], err_EmptyStr],
  [["", ""], err_EmptyStr],
  [["", "item"], err_NoNum],
  [["", "item", null], err_ThirdParam],
  [["", "item", [""]], err_ThirdParam],
  [["", "item", {}], err_ThirdParam],
  [[{}, "item", {}], err_NoStrNoNumOR],
  [[5, "item", {}], err_ThirdParam],
  [[5, "item", { round: 2 }], err_Round],
];

const cases = [
  [[0, "item"], "no items"],
  [[1, "item"], "1 item"],
  [[2, "item"], "2 items"],
  [[3, "item"], "3 items"],
  [[-1, "item"], "no items"],
];

const irregularNouns = [
  [[0, "leaf", "leaves"], "no leaves"],
  [[1, "leaf", "leaves"], "1 leaf"],
  [[2, "leaf", "leaves"], "2 leaves"],
  [[3, "leaf", "leaves"], "3 leaves"],
  [[-1, "leaf", "leaves"], "no leaves"],
];

const numberConversion = [
  [["0", "leaf", "leaves"], "no leaves"],
  [["1", "leaf", "leaves"], "1 leaf"],
  [["3.14", "leaf", "leaves"], "3.14 leaves"],
];

const numberRounding = [
  [[3.14, "item"], "3.14 items"],
  [[3.14, "item", "items", { round: -1 }], "3 items"],
  [[3.49, "item", "items", { round: true }], "3 items"],
  [[3.5, "item", "items", { round: true }], "4 items"],
  [["3.14", "item", "items", { round: 1 }], "4 items"],
  [["3.14", "item", "items", { round: -1 }], "3 items"],
  [["3.49", "item", "items", { round: -1 }], "3 items"],
];

const comprehensiveCases = [
  [[4.49, "item", { round: true }], "4 items"],
  [["4.49", "item", "stuff", { round: 1 }], "5 stuff"],
  [["4.49", "item", "stuff", { round: -1 }], "4 stuff"],
  [["4.49", "leaf", "leaves"], "4.49 leaves"],
  [["0.1", "leaf", "leaves", { round: 1 }], "1 leaf"],
  [["0.49", "leaf", "leaves", { round: true }], "no leaves"],
];

testIt(concord, errorCases, { type: "error", description: "returns an error" });

testIt(concord, cases, { description: "returns the correct value" });

testIt(concord, irregularNouns, {
  description: "returns correct irregular nouns",
});

testIt(concord, numberConversion, {
  description:
    "returns the correct value for parsed number when given a string",
});

testIt(concord, numberRounding, {
  description: "returns concord with correctly rounded values",
});

testIt(concord, comprehensiveCases, {
  description:
    "returns the correct concord, with the number correctly parsed and rounded",
});
