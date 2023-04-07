const theLargestNumber = require("./theLargestNumber");

test("tìm số lớn nhất trong mảng ", () => {
  expect(theLargestNumber([1, 2, 3, 4, 5, 6, 7])).toBe(7);
});

test("tìm số lớn nhất trong mảng ", () => {
  expect(theLargestNumber([10, 2, 23, 4, 95, 6, 57])).toBe(95);
});

test("tìm số lớn nhất trong mảng có số âm ", () => {
  expect(theLargestNumber([1, -2, 3, -4, 5, 6, -7])).toBe(6);
});

test("tìm số lớn nhất trong mảng toàn số âm ", () => {
  expect(theLargestNumber([-1, -2, -3, -4, -5, -6, -7])).toBe(-1);
});

test("tìm số lớn nhất trong mảng toàn số âm ", () => {
  expect(theLargestNumber([-1, -24, -31, -42, -50, -60, -73])).toBe(-1);
});
