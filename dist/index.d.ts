declare const ROUND_VALUES: readonly [-1, true, 1, false];

type ConcordOption = (typeof ROUND_VALUES)[number | boolean];

type Concord = {
  (
    num: number | string,
    str: string,
    plural?: string | ConcordOption,
    options?: ConcordOption
  ): string;
};

type Enumerate = {
  (
    input: string[],
    options?: { unique?: boolean; limit?: number; tail?: number }
  ): string;
};

type CapitalizeOption = "sentence" | "word" | "all";

type Capitalize = {
  (
    input: string | string[],
    style?: { style?: CapitalizeOption }
  ): string | string[];
};

// pipe types
type Pipe<A, B> = (input: A) => B;

type ReduceText = {
  (input: string, stop: number, params?: string);
};

declare const concord: Concord;

declare const capitalize: Capitalize;

declare const enumerate: Enumerate;

declare const pipe: <T, R>(...functions: Pipe<any, any>[]) => Pipe<T, R>;

declare const reduceText: ReduceText;

export { capitalize, concord, enumerate, pipe, reduceText };
