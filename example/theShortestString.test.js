const theShortestString = require("./theShortestString");

test("shortest string", () => {
  expect(theShortestString(["abccc", "bbbb", "ccc"])).toBe("ccc");
});

test("shortest string", () => {
  expect(
    theShortestString(["ab", "bbbaaaaaab", "ccccasfasfsc", "uqyuieea"])
  ).toBe("ab");
});

test("shortest string  ", () => {
  expect(
    theShortestString([
      "ab8df22",
      "90821932712390",
      "ccccasfasfsc",
      "uqyuieea",
      "aj1",
    ])
  ).toBe("aj1");
});

test("shortest string  ", () => {
  expect(
    theShortestString(["902881", "90821932712390", "11199", "uqyuieea", "102"])
  ).toBe("102");
});
test("shortest string  ", () => {
  expect(
    theShortestString([
      "9ashdjkdhs81",
      "908akaja11390",
      "11100kakakajhjaah99",
      "uqyuieea",
      "10aa2",
    ])
  ).toBe("10aa2");
});
