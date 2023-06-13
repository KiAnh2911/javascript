const square = require("./square");

test("square 5 ", () => {
  expect(square(5)).toBe(25);
});

test("square -5 ", () => {
  expect(square(-5)).toBe(25);
});

test("square 10 ", () => {
  expect(square(10)).toBe(100);
});

test("square 55 ", () => {
  expect(square(55)).toBe(3025);
});
