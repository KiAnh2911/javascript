const maxSubarraySum = require("./maxSubArraySum");

test("tổng giá trị liền kề lớn nhất của mảng", () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6])).toBe(21);
});

test("tổng giá trị liền kề lớn nhất của mảng", () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6])).toBe(21);
});

test("tổng giá trị liền kề lớn nhất của mảng", () => {
  expect(maxSubarraySum([1, 2, 3, 4, 5, 6, -7])).toBe(21);
});

test("tổng giá trị liền kề lớn nhất của mảng", () => {
  expect(maxSubarraySum([1, 2, 3, -4, 4, 5, 6])).toBe(17);
});

test("tổng giá trị liền kề lớn nhất của mảng", () => {
  expect(maxSubarraySum([1, 2, 3, -4, 4, 5, 6, 5, -7, 10])).toBe(25);
});
