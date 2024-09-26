import { describe, it, expect } from "vitest";
import { getArrayOrDefault } from "../../src/utils/array.js";

describe("Testing Function Utils getArrayOrDefault", () => {
  it("should returns arr if arr is not empty", () => {
    const arr = [1, 2, 3];
    const defaultArr = [4, 5, 6];
    expect(getArrayOrDefault(arr, defaultArr)).toEqual(arr);
  });

  it("should returns defaultArr if arr is empty", () => {
    const arr = [];
    const defaultArr = [4, 5, 6];
    expect(getArrayOrDefault(arr, defaultArr)).toEqual(defaultArr);
  });

  it("should returns defaultArr if arr is null", () => {
    const arr = null;
    const defaultArr = [4, 5, 6];
    expect(() => {
      getArrayOrDefault(arr, defaultArr)();
    }).toThrow(new Error("arguments must be array type"));
  });

  it("should returns defaultArr if arr is undefined", () => {
    const arr = null;
    const defaultArr = [4, 5, 6];
    expect(() => {
      getArrayOrDefault(arr, defaultArr)();
    }).toThrow(new Error("arguments must be array type"));
  });

  it("throws error if arr is not an array", () => {
    const arr = "not an array";
    const defaultArr = [4, 5, 6];
    expect(() => getArrayOrDefault(arr, defaultArr)).toThrow(
      new Error("arguments must be array type")
    );
  });

  it("throws error if defaultArr is not an array", () => {
    const arr = [1, 2, 3];
    const defaultArr = "not an array";
    expect(() => getArrayOrDefault(arr, defaultArr)).toThrow(
      new Error("arguments must be array type")
    );
  });

  it("should returns defaultArr if arr is an empty array and defaultArr is empty", () => {
    const arr = [];
    const defaultArr = [];
    expect(getArrayOrDefault(arr, defaultArr)).toEqual(defaultArr);
  });
});
