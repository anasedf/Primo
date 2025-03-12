import { merge } from "../src/merge";
import { expect, test } from "bun:test";

test("Should merge and sort correctly", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

test("Handles empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 4], [])).toEqual([3, 4]);
    expect(merge([], [], [5, 1])).toEqual([1, 5]);
});

test("Handles duplicates", () => {
    expect(merge([1, 2, 2], [3, 3, 4], [5, 5, 5])).toEqual([1, 2, 2, 3, 3, 4, 5, 5, 5]);
});
