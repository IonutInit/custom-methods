// simplistic methods of checking if a flat array contains the same type of elements
// used only for checking for strings and numbers

const arrayPurity = (input: any[], type: string) => {
  if (!Array.isArray(input) || input.some((i) => typeof i !== type))
    return false;
  return true;
};

export default arrayPurity;
