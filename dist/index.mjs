// src/concord.ts
var concord = (num, str, plural = str + "s") => {
  if (num <= 0)
    return `no ${plural}`;
  return `${num} ${num === 1 ? str : plural}`;
};
var concord_default = concord;
export {
  concord_default as concord
};
