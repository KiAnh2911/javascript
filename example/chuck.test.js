const chuck = require("./chuck");

test("chia đều mảng theo số phần tử chỉ định", () => {
  expect(chuck([1, 2, 4, 5, 6, 7, 8], 2)).toEqual([
    [1, 2, 4, 5],
    [6, 7, 8],
  ]);
});

test("chia đều mảng theo số phần tử chỉ định", () => {
  expect(chuck(["1", "2", "4", "5", "6", "7", "8"], 2)).toEqual([
    ["1", "2", "4", "5"],
    ["6", "7", "8"],
  ]);
});

test("chia đều mảng theo số phần tử chỉ định", () => {
  expect(chuck(["1", "2", "4", "5", "6", "7", "8"], 3)).toEqual([
    ["1", "2", "4"],
    ["5", "6"],
    ["7", "8"],
  ]);
});

test("chia đều mảng theo số phần tử chỉ định", () => {
  expect(chuck(["1", "2", "4", "5", "6", "7", "8"], 4)).toEqual([
    ["1", "2"],
    ["4", "5"],
    ["6", "7"],
    ["8"],
  ]);
});

test("chia đều mảng theo số phần tử chỉ định", () => {
  expect(chuck(["1", "2", "4", "5", "6", "7", "8"], 5)).toEqual([
    ["1", "2"],
    ["4", "5"],
    ["6"],
    ["7"],
    ["8"],
  ]);
});
