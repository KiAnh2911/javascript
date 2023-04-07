const theNumberWord = require("./theNumberWord");

test("số lượng các từ trong chuỗi", () => {
  expect(theNumberWord("what is reactjs")).toBe(3);
});

test("số lượng các từ trong chuỗi", () => {
  expect(theNumberWord("where are you from ?")).toBe(5);
});

test("số lượng các từ trong chuỗi", () => {
  expect(theNumberWord("ahshh ajdhh kk oo okl ll ok")).toBe(7);
});

test("số lượng các từ trong chuỗi", () => {
  expect(theNumberWord("Thanks very much ! Meeting zoom oke la lo ")).toBe(9);
});

test("số lượng các từ trong chuỗi", () => {
  expect(theNumberWord("This is a sample string")).toBe(5);
});
