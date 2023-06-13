const sortNumber = require("./sortNumber");

test("sort giá trị tăng dần trong array", () => {
  expect(sortNumber([1, 2, 894, 0, 32, 76, 1111])).toEqual([
    0, 1, 2, 32, 76, 894, 1111,
  ]);
});

test("sort giá trị tăng dần trong array", () => {
  expect(sortNumber([1, 2, 8941, 23, 67, 1111])).toEqual([
    1, 2, 23, 67, 1111, 8941,
  ]);
});

test("sort giá trị tăng dần trong array", () => {
  expect(sortNumber([1, 2, 23, 67, 675, 11101, 9999])).toEqual([
    1, 2, 23, 67, 675, 9999, 11101,
  ]);
});
test("sort giá trị tăng dần trong array", () => {
  expect(sortNumber([0, 2, 99, 67, 675, 11101, 999])).toEqual([
    0, 2, 67, 99, 675, 999, 11101,
  ]);
});

test("sort giá trị tăng dần trong array", () => {
  expect(sortNumber([0, 2, 9, 6, 5, 101, 9919])).toEqual([
    0, 2, 5, 6, 9, 101, 9919,
  ]);
});
