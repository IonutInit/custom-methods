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

type Capitalize = {
  (input: string | string[]): string | string[];
};

declare const concord: Concord;

declare const capitalize: Capitalize;

declare const enumerate: Enumerate;

export { capitalize, concord, enumerate };
