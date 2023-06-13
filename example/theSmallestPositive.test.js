const theSmallestPositive = require("./theSmallestPositive");

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách", () => {
  expect(theSmallestPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 15])).toBe(71);
});

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách", () => {
  expect(theSmallestPositive([1, 2, 3, 7, 8, 20])).toBe(42);
});

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách", () => {
  expect(theSmallestPositive([1, 2, 3, 7, 10])).toBe(24);
});

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách", () => {
  expect(theSmallestPositive([1, -2, 3, 4, 5, 6, 7, 8, 9, 10, 15])).toBe(-1);
});

test("tìm số nguyên dương nhỏ nhất không thể biểu diễn dưới dạng tổng của bất kỳ tập hợp con nào của danh sách", () => {
  expect(theSmallestPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -15])).toBe(-14);
});
