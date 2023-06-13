const secondLargestNumber = require("./secondLargestNumber");

test("tìm số lớn thứ 2 trong 1 array", () => {
  expect(secondLargestNumber([1, 90, 35, 845, 23, 73, 12])).toBe(90);
});

test("tìm số lớn thứ 2 trong 1 array", () => {
  expect(secondLargestNumber([1, 90, 35, 845, 23, 73, 93, 12])).toBe(93);
});

test("tìm số lớn thứ 2 trong 1 array", () => {
  expect(secondLargestNumber([1, 9, 4, 7, 2, 78, 20])).toBe(20);
});

test("tìm số lớn thứ 2 trong 1 array", () => {
  expect(
    secondLargestNumber([1, 90, 35, 845, 23, 73, 12, 1, 9, 4, 7, 2, 78, 20])
  ).toBe(90);
});

test("tìm số lớn thứ 2 trong 1 array", () => {
  expect(secondLargestNumber([23, 73, 12, 1, 9, 4, 7, 2])).toBe(23);
});
