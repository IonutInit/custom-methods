"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// index.ts
var custom_methods_exports = {};
__export(custom_methods_exports, {
  concord: () => concord_default
});
module.exports = __toCommonJS(custom_methods_exports);

// src/concord.ts
var concord = (num, str, plural = str + "s") => {
  if (num <= 0)
    return `no ${plural}`;
  return `${num} ${num === 1 ? str : plural}`;
};
var concord_default = concord;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  concord
});
