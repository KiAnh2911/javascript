const medianTwoList = require("./medianTwoList");

test("tìm trung vị trong 2 array", () => {
  expect(medianTwoList([1, 3, 68, 8, 5, 9], [7, 0, 2, 7, 4, 9])).toBe(6);
});

test("tìm trung vị trong 2 array", () => {
  expect(medianTwoList([1, 2, 3], [4, 5, 6])).toBe(3.5);
});

test("tìm trung vị trong 2 array", () => {
  expect(medianTwoList([1, 3, 8, 5, 9], [7, 0, 2, 7, 4, 9])).toBe(5);
});

test("tìm trung vị trong 2 array", () => {
  expect(medianTwoList([1, 3, 5, 9], [7, 0, 2, 7, 4])).toBe(4);
});

test("tìm trung vị trong 2 array", () => {
  expect(
    medianTwoList([55, 78, 94, 12, 76, 23], [97, 34, 87, 0, 34, 75, 87])
  ).toBe(75);
});
