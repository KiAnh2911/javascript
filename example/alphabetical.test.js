const alphabetical = require("./alphabetical");

test("sort string theo bảng chữ cái ", () => {
  expect(alphabetical(["a", "ab", "abc", "b", "c"])).toEqual([
    "a",
    "ab",
    "abc",
    "b",
    "c",
  ]);
});
test("sort string theo bảng chữ cái ", () => {
  expect(alphabetical(["fe", "a", "dcf", "b", "abc", "ab", "d", "cc"])).toEqual(
    ["a", "ab", "abc", "b", "cc", "d", "dcf", "fe"]
  );
});
test("sort string theo bảng chữ cái ", () => {
  expect(
    alphabetical(["gh", "fe", "a", "dcf", "b", "abc", "ab", "d", "cc"])
  ).toEqual(["a", "ab", "abc", "b", "cc", "d", "dcf", "fe", "gh"]);
});
test("sort string theo bảng chữ cái ", () => {
  expect(
    alphabetical(["a", "d", "f", "i", "k", "c", "b", "l", "e", "g", "h"])
  ).toEqual(["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l"]);
});

test("sort string theo bảng chữ cái ", () => {
  expect(alphabetical(["a", "d", "f", "i", "k", "c", "b", "l"])).toEqual([
    "a",
    "b",
    "c",
    "d",
    "f",
    "i",
    "k",
    "l",
  ]);
});
