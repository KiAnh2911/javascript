const theNumberBubbleSort = require("./theNumberBubbleSort");

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
  expect(theNumberBubbleSort([3, 1, 4, 2, 6, 5])).toBe(4);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
  expect(theNumberBubbleSort([3, 1, 4, 2, 6, 5, 0, 9, 11, 39])).toBe(10);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
  expect(theNumberBubbleSort([5, 3, 8, 6, 7, 2])).toBe(8);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
  expect(theNumberBubbleSort([3, 1, 4, 8, 7, 9, 2, 6, 5, 10])).toBe(14);
});

test("tìm số lần hoán đổi vị trị khi sắp xếp mảng ", () => {
  expect(theNumberBubbleSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])).toBe(0);
});
