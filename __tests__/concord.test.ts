import { concord } from "../index"
import testIt from "../testIt";

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

// testIt(concord, cases, { description: "returns the correct value" });

// testIt(concord, irregularNouns, {
//   description: "returns correct irregular nouns",
// });
