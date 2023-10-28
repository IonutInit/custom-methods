import ROUND_VALUES from "./constants/concordOptions";
import STRING_END from "./constants/stringEnd";

type ConcordOption = (typeof ROUND_VALUES)[number | boolean];

export type Concord = {
  (
    num: number | string,
    str: string,
    plural?: string | ConcordOption,
    options?: ConcordOption
  ): string;
};

export type Enumerate = {
  (
    input: string[],
    options?: { unique?: boolean; limit?: number; tail?: number }
  ): string;
};

type CapitalizeOption = "sentence" | "word" | "all";

export type Capitalize = {
  (
    input: string | string[],
    style?: { style?: CapitalizeOption }
  ): string | string[];
};

// pipe types
export type Pipe<A, B> = (input: A) => B;

export type ReduceText = {
  (input: string, stop: number, params?: string);
};
