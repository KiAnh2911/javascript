const uniq = require("./uniqueSet");

test("loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 1, 2, 3, 4, 5, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 1, 2, 3, 3, 2, 6, 5, 3, 4, 5, 4, 4, 5])).toEqual([
    1, 2, 3, 6, 5, 4,
  ]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 1, 2, 3, 4, 5, 4, 4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 1, 2, 3, 4, 5, 4, 4, 5, 7])).toEqual([1, 2, 3, 4, 5, 7]);
});

test("loại bỏ các phần tử bị lặp trong mảng", () => {
  expect(uniq([1, 1, 2, 3, 4, 9, 9, 7, 8, 5, 4, 4, 5])).toEqual([
    1, 2, 3, 4, 9, 7, 8, 5,
  ]);
});
