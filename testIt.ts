type TestType = "equal" | "be" | "error";

const testIt = (
  func: Function,
  cases: any[],
  { description = "", type = "equal" as TestType } = {}
) => {
  describe(func.name, () => {
    cases.forEach(
      ([input, expected, options = { description: false, type: false }]) => {
        let execType: TestType;
        !options.type ? (execType = type) : (execType = options.type);

        test(!options.description ? description : options.description, () => {
          if (execType === "error") {
            expect(() => func(...input)).toThrowError(expected);
          } else if (execType === "be") {
            expect(func(...input)).toEqual(expected);
          } else if (execType === "equal") {
            expect(func(...input)).toEqual(expected);
          }
        });
      }
    );
  });
};

export default testIt;
