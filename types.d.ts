import ROUND_VALUES from "./constants/concordOptions";

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

export type Capitalize = {
  (input: string | string[]): string | string[];
};
