const theSecondSmallest = require("./theSecondSmallest");

test("tìm giá trị nhỏ nhất thứ 2 của mảng", () => {
  expect(theSecondSmallest([1, 3, 6, 7, 38])).toBe(3);
});

test("tìm giá trị nhỏ nhất thứ 2 của mảng", () => {
  expect(theSecondSmallest([1, 3, 6, 7, 38, 0])).toBe(1);
});

test("tìm giá trị nhỏ nhất thứ 2 của mảng", () => {
  expect(theSecondSmallest([103, 213, 86, 17, 38, 110])).toBe(38);
});

test("tìm giá trị nhỏ nhất thứ 2 của mảng", () => {
  expect(theSecondSmallest([103, 213, 86, 71, 38, 110])).toBe(71);
});

test("tìm giá trị nhỏ nhất thứ 2 của mảng", () => {
  expect(theSecondSmallest([103, 213, 826, 38, 110])).toBe(103);
});
