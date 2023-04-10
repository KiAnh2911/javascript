const switchOrder = require("./switchOder");

test("thay đổi thứ tự order của các object.", () => {
  expect(
    switchOrder(9, 1, [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ])
  ).toEqual([
    { id: 10, order: 0 },
    { id: 9, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});

test("thay đổi thứ tự order của các object.", () => {
  expect(
    switchOrder(9, 0, [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ])
  ).toEqual([
    { id: 9, order: 0 },
    { id: 10, order: 1 },
    { id: 12, order: 2 },
    { id: 11, order: 3 },
  ]);
});

test("thay đổi thứ tự order của các object.", () => {
  expect(
    switchOrder(11, 1, [
      { id: 10, order: 0 },
      { id: 12, order: 1 },
      { id: 9, order: 2 },
      { id: 11, order: 3 },
    ])
  ).toEqual([
    { id: 10, order: 0 },
    { id: 11, order: 1 },
    { id: 12, order: 2 },
    { id: 9, order: 3 },
  ]);
});
