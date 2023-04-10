const remove = require("./remove");

test("xoá obj trùng nhau", () => {
  expect(
    remove([
      { x: 1, y: 2 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2 },
    { x: 2, y: 1 },
  ]);
});

test("xoá obj trùng nhau", () => {
  expect(
    remove([
      { x: 1, y: 2, z: 3 },
      { x: 2, y: 1 },
      { x: 1, y: 2 },
    ])
  ).toEqual([
    { x: 1, y: 2, z: 3 },
    { x: 2, y: 1 },
  ]);
});

test("xoá obj trùng nhau", () => {
  expect(
    remove([
      { x: 1, y: 2, z: 3 },
      { x: 2, y: 1 },
      { x: 1, y: 3 },
    ])
  ).toEqual([
    { x: 1, y: 2, z: 3 },
    { x: 2, y: 1 },
    { x: 1, y: 3 },
  ]);
});
