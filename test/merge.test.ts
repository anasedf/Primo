import { merge } from "../src/merge";
import { expect, test } from "bun:test";

// ทดสอบการรวมและเรียงลำดับข้อมูลตามปกติ
test("Should merge and sort correctly", () => {
    expect(merge([1, 3, 5], [2, 4, 6], [9, 8, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
});

// ทดสอบกรณีที่มีอาร์เรย์ว่าง
test("Handles empty collections", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 4], [])).toEqual([3, 4]);
    expect(merge([], [], [5, 1])).toEqual([1, 5]);
});

// ทดสอบกรณีที่มีค่าซ้ำกัน
test("Handles duplicates", () => {
    expect(merge([1, 2, 2], [3, 3, 4], [5, 5, 5])).toEqual([1, 2, 2, 3, 3, 4, 5, 5, 5]);
});

// ทดสอบกรณีที่แต่ละอาร์เรย์มีเพียงค่าเดียว
test("Handles collections with one element", () => {
    expect(merge([1], [2], [3])).toEqual([1, 2, 3]);
    expect(merge([3], [2], [1])).toEqual([1, 2, 3]);
});

// ทดสอบกรณีที่มีตัวเลขขนาดใหญ่
test("Handles collections with large numbers", () => {
    expect(merge([100, 200], [150, 250], [300, 280])).toEqual([100, 150, 200, 250, 280, 300]);
});

// ทดสอบกรณีที่มีตัวเลขติดลบ
test("Handles collections with negative numbers", () => {
    expect(merge([-3, -1, 1], [-2, 0, 2], [3, 0, -5])).toEqual([-5, -3, -2, -1, 0, 0, 1, 2, 3]);
});

// ทดสอบกรณีที่มีทั้งตัวเลขบวกและลบ
test("Handles collections with mixed positive and negative numbers", () => {
    expect(merge([-1, 1, 3], [-2, 2, 4], [5, 0, -3])).toEqual([-3, -2, -1, 0, 1, 2, 3, 4, 5]);
});

// ทดสอบกรณีที่มีเพียงอาร์เรย์เดียวที่มีค่า
test("Handles collections with only one collection having elements", () => {
    expect(merge([1,2,3],[],[])).toEqual([1,2,3]);
    expect(merge([], [4,5,6], [])).toEqual([4,5,6]);
    expect(merge([], [], [9,8,7])).toEqual([7,8,9]);
});

