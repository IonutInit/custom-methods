import enumerate from "../src/enumerate";
import testIt from "../testIt";

import { enumerateError } from "../constants/errorMessages";

const { err_StrArr, err_Unique, err_LimitTail } = enumerateError;

const errors = [
  [[5], err_StrArr],
  [["hello"], err_StrArr],
  [[{ a: 1 }], err_StrArr],
  [[[{ a: 1 }]], err_StrArr],
  [[["one", { a: 1 }]], err_StrArr],
  [[["one", { a: 1 }], { limit: 1 }], err_StrArr],
  [[["one", { a: 1 }], { limit: 2 }], err_StrArr],
  [[["one"], { unique: "yes" }], err_Unique],
  [[["one", "two", "three"], { tail: true }], err_LimitTail],
  [[["one", "two", "three"], { tail: 1, limit: "yes" }], err_LimitTail],
  [[["one", "two", "three"], { tail: -1, limit: 1 }], err_LimitTail],
];

const noOptions = [
  [[["one"]], "one"],
  [[["one", "two"]], "one and two"],
  [[["one", "two", "three"]], "one, two and three"],
  [[["one", "two", "three", "four"]], "one, two, three and four"],
  [[["one", "two", "three", "four", "five"]], "one, two, three, four and five"],
];

const testLimit = [
  [[["one"], { limit: 1 }], "one"],
  [[["one", "two"], { limit: 1 }], "one..."],
  [[["one", "two", "three"], { limit: 1 }], "one..."],
  [[["one", "two", "three"], { limit: 2 }], "one, two..."],
  [[["one", "two", "three"], { limit: 3 }], "one, two, three"],
  [[["one", "two", "three", "four"], { limit: 3 }], "one, two, three..."],
  [
    [["one", "two", "three", "four", "five"], { limit: 3 }],
    "one, two, three...",
  ],
  [
    [["one", "two", "three", "four", "five"], { limit: 4 }],
    "one, two, three, four...",
  ],
  [[["one", "two"], { limit: 10 }], "one, two"],
  [[["one", "two", "three"], { limit: 10 }], "one, two, three"],
];

const testTail = [
  [
    [["one"], { tail: 1 }],
    "one",
    { description: "ignores tail if no limit is provided" },
  ],
  [
    [["one", "two"], { tail: 1 }],
    "one and two",
    { description: "ignores tail if no limit is provided" },
  ],
  [
    [["one", "two", "three"], { tail: 1 }],
    "one, two and three",
    { description: "ignores tail if no limit is provided" },
  ],
  [
    [["one"], { limit: 1, tail: 2 }],
    "one",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two"], { limit: 3, tail: 1 }],
    "one, two",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two", "three"], { limit: 1, tail: 1 }],
    "one... three",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two", "three", "four", "five"], { limit: 2, tail: 2 }],
    "one, two... four, five",
  ],
  [
    [["one", "two", "three", "four", "five"], { limit: 2, tail: 1 }],
    "one, two... five",
  ],
  [
    [["one", "two", "three", "four", "five"], { limit: 1, tail: 1 }],
    "one... five",
  ],
];

const tailEdges = [
  [
    [["one"], { limit: 1, tail: 1 }],
    "one",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two"], { limit: 2, tail: 2 }],
    "one, two",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two", "three"], { limit: 2, tail: 2 }],
    "one, two...",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two", "three", "four", "five"], { limit: 2, tail: 4 }],
    "one, two...",
    { description: "ignores tail if larger or equal than limit" },
  ],
  [
    [["one", "two"], { limit: 3, tail: 2 }],
    "one, two",
    {
      description:
        "ignores tail if array is equal or smaller than limit + tail",
    },
  ],
  [
    [["one", "two", "three"], { limit: 3, tail: 1 }],
    "one, two, three",
    { description: "ignores tail if larger or equal than limit" },
  ],
];

const testUnique: any[] = [
  [[["one"], { unique: true }], "one"],
  [[["one", "one"], { unique: true }], "one"],
  [[["one", "one"], { unique: false }], "one and one"],
  [[["one", "one", "two"], { unique: true }], "one and two"],
  [
    [["one", "one", "two", "three", "three"], { unique: true }],
    "one, two and three",
  ],
  [
    [["one", "one", "two", "three", "three"], { unique: true, limit: 1 }],
    "one...",
  ],
  [
    [
      ["one", "one", "two", "three", "three"],
      { unique: true, limit: 1, tail: 1 },
    ],
    "one... three",
  ],
  [
    [
      ["one", "one", "two", "two", "two", "three", "three"],
      { unique: true, limit: 1, tail: 1 },
    ],
    "one... three",
  ],
];

testIt(enumerate, errors, {
  type: "error",
  description: "Returns error if not provided an array of strings",
});

testIt(enumerate, noOptions, {
  description: "Returns enumerated array elements",
});

testIt(enumerate, testLimit, {
  description: "Returns enumeration up to the provided limit",
});

testIt(enumerate, testTail, {
  description: "Returns enumerated array according to limit and tail",
});

testIt(enumerate, tailEdges);

testIt(enumerate, testUnique, {
  description: "Returns enumerated unique values of array",
});
