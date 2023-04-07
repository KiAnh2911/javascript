const median = require("./median");

test("tìm median của array", () => {
  expect(median([1, 2, 39, 45, 6, 1])).toBe(4);
});

test("tìm median của array", () => {
  expect(median([1, 27, 39, 45, 6])).toBe(27);
});

test("tìm median của array", () => {
  expect(median([1, 27, 39, 45, 6, 9, 5])).toBe(9);
});

test("tìm median của array", () => {
  expect(median([1, 27, 39, 45, 6, 9, 5, 82])).toBe(18);
});

test("tìm median của array", () => {
  expect(median([1, 27, 39, 5, 6, 9, 5, 2])).toBe(5.5);
});
