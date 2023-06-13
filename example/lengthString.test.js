const lengthString = require("./lengthString");

test("tính độ dài của 1 chuỗi characters", () => {
  expect(lengthString("aaaa")).toBe(4);
});

test("tính độ dài của 1 chuỗi truyền giá trị number ", () => {
  expect(lengthString(676767)).toBe(6);
});

test("tính độ dài của 1 chuỗi characters có khoảng trắng", () => {
  expect(lengthString("aa aa")).toBe(5);
});

test("tính độ dài của 1 chuỗi characters có kí tự đặc biệt", () => {
  expect(lengthString("!@#$%")).toBe(5);
});

test("tính độ dài của 1 chuỗi characters có khoảng trắng và kí tự đặc biệt ", () => {
  expect(lengthString("aa aa%#@@$@")).toBe(11);
});
