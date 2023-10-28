import pipe from "../src/pipe";

describe("pipe", () => {
  // Test when no function is passed
  it("should return input when no functions are passed", () => {
    const pipedFunction = pipe();
    const result = pipedFunction("inputValue");
    expect(result).toBe("inputValue");
  });

  // Test when a single function is passed
  it("should return transformed input when one function is passed", () => {
    const increment = (x: number) => x + 1;
    const pipedFunction = pipe(increment);
    const result = pipedFunction(3);
    expect(result).toBe(4);
  });

  // Test when multiple functions are passed
  it("should return transformed input when multiple functions are passed", () => {
    const increment = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const pipedFunction = pipe(increment, double);
    const result = pipedFunction(3);
    expect(result).toBe(8);
  });

  // Test chaining of multiple functions
  it("should correctly chain multiple functions", () => {
    const increment = (x: number) => x + 1;
    const double = (x: number) => x * 2;
    const toString = (x: number) => x.toString();
    const pipedFunction = pipe(increment, double, toString);
    const result = pipedFunction(3);
    expect(result).toBe("8");
  });
});

describe("pipe error handling", () => {
  it("should throw an error if one of the functions throws", () => {
    const throwError = () => {
      throw new Error("Some error occurred!");
    };
    const pipedFunction = pipe(throwError);
    expect(() => pipedFunction("inputValue")).toThrowError(
      "Some error occurred!"
    );
  });

  it("should throw an error if one of the functions in the pipeline throws", () => {
    const increment = (x: number) => x + 1;
    const throwError = (x: number) => {
      throw new Error("Some error occurred!");
    };
    const double = (x: number) => x * 2;
    const pipedFunction = pipe(increment, throwError, double);
    expect(() => pipedFunction(3)).toThrowError("Some error occurred!");
  });
});
