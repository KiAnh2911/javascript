const theMaxiumDifference = require("./theMaxium");

test("tìm hiệu lớn nhất trogn array ", () => {
  expect(theMaxiumDifference([1, 2, 91, 9, 100])).toBe(99);
});

test("tìm hiệu lớn nhất trogn array ", () => {
  expect(theMaxiumDifference([1, 2, 3, 119, 100, 4, 89])).toBe(118);
});

test("tìm hiệu lớn nhất trogn array ", () => {
  expect(theMaxiumDifference([1, 2, 3, 119, 1271, 4, 89, 227, 29])).toBe(1270);
});

test("tìm hiệu lớn nhất trogn array ", () => {
  expect(theMaxiumDifference([0, 1, 2, 3, 119, 100, 4, 89])).toBe(119);
});

test("tìm hiệu lớn nhất trogn array ", () => {
  expect(theMaxiumDifference([0, 1, 2, 3, 19, 100, 4, 89, 893])).toBe(893);
});
