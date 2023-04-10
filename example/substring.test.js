const substring = require("./substring");

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
  expect(substring(["abcdefg", "abcde", "abcdef", "ab", "abc"])).toBe(2);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
  expect(substring(["programming", "programmer", "program"])).toBe(7);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
  expect(substring(["hello", "world", "jelly"])).toBe(1);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
  expect(substring(["abcdefg", "abcde", "abcdef", "ab", "abc", "o"])).toBe(0);
});

test("tìm độ dài của chuỗi con dài nhất xuất hiện trong mọi chuỗi trong danh sách", () => {
  expect(
    substring([
      "abcdefg",
      "abcde",
      "abcdef",
      "abe",
      "eabc",
      "hello",
      "worlded",
      "jelly",
    ])
  ).toBe(1);
});
