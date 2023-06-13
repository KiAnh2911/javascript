const distinct = require("./distinct");

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
  expect(distinct([1, 2, 3, 4, 5], 5)).toBe(3);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
  expect(distinct([1, 2, 3, 4, 5], 4)).toBe(2);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
  expect(distinct([1, 2, 3, 3, 4, 5, 6], 6)).toBe(6);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
  expect(distinct([1, 2, 3, 3, 4, 5, 6, 7], 8)).toBe(8);
});

test("tìm số lượng các dãy con riêng biệt của danh sách có tổng bằng một giá trị đích", () => {
  expect(distinct([1, 2, 3, 3, 4, 5, 6, 7], 9)).toBe(10);
});
