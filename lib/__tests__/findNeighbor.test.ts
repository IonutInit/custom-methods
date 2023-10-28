import findNeighbor from "../findNeighbor";
import testIt from "../../testIt";

import { findNeighborError } from "../../constants/errorMessages";
const { err_NoArrNoNum, err_EmptyArr } = findNeighborError;

const errorCases = [
  [[["hello"], 5], err_NoArrNoNum, { description: err_NoArrNoNum }],
  [[[3, 4, 5], "f"], err_NoArrNoNum, { description: err_NoArrNoNum }],
  [[[3, 4, 5, "f"], 3], err_NoArrNoNum, { description: err_NoArrNoNum }],
  [[[3, 4, 5], []], err_NoArrNoNum, { description: err_NoArrNoNum }],
  [[[1, 2, 3]], err_NoArrNoNum, { description: err_NoArrNoNum }],
  [[[], 3], err_EmptyArr, { description: err_EmptyArr }],
];

const testCases = [
  [[[1, 23, 45, 56], 3], 1],
  [[[1, 23, 45, 56], 20], 23],
  [[[1, 2, 3, 4], 3], 3],
  [[[1, 2, 3, 3, 4], 3], 3],
  [[[1, 2, 2, 3, 3, 4], 3], 3],
  [[[-2, -4, 5, -7, 3], 4], 5],
  [[[-2, -4, 5, -7, 3], -3], -2],
  [[[-21, -4, 5, -7, 3], -8], -7],
];

testIt(findNeighbor, testCases, {
  description: "returns the element closest in value to the number provided",
});
testIt(findNeighbor, errorCases, { type: "error" });

// Intermediary tests for the individual array methods

// const mappedArray = [
//     [[[1, 2, 3, 4], [1]], [0, 1, 2, 3]],
//     [[[1, 2, 3, 4], [2]], [1 ,0, 1, 2]],
// ]

// const smallestIndex = [
//     [[[1, 23, 45], [2]], 0],
//     [[[1, 23, 45], [22]], 1],
//     [[[1, 23, 45], [41]], 2],
// ]

// testIt(findNeighbor, mappedArray)
// testIt(findNeighbor, smallestIndex)
