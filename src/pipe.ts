import { Pipe } from "../types";

const pipe = <T, R>(...functions: Pipe<any, any>[]): Pipe<T, R> => {
  if (functions.length === 0) return (input) => input as unknown as R;
  if (functions.length === 1)
    return (input) => functions[0]!(input) as unknown as R;

  return function (input: T) {
    try {
      return functions.slice(1).reduce((acc, func) => {
        return func(acc);
      }, functions[0]!(input)) as R;
    } catch (error) {
      throw error;
    }
  };
};

export default pipe;
