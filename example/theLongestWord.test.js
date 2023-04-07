const theLongestWord = require("./theLongestWord");

test("tìm chuỗi dài nhất trong array và in nó ra ", () => {
  expect(
    theLongestWord([
      "asadasdasddas",
      "ahjgsdhjasgashjgqwqwuiiohas",
      "iqyuw228",
      "hajw",
    ])
  ).toEqual("ahjgsdhjasgashjgqwqwuiiohas");
});

test("tìm chuỗi dài nhất trong array và in nó ra ", () => {
  expect(
    theLongestWord([
      "aaaaa",
      "aa",
      "cscafdfff",
      "a222a",
      "cscafss77dfff",
      "ahjthisisoklameetingzoomjksklahiwyqhui",
    ])
  ).toEqual("ahjthisisoklameetingzoomjksklahiwyqhui");
});

test("tìm chuỗi dài nhất trong array và in nó ra ", () => {
  expect(
    theLongestWord(["aaaaa", "aa", "this is ok ", "ok this is longest"])
  ).toEqual("ok this is longest");
});

test("tìm chuỗi dài nhất trong array và in nó ra ", () => {
  expect(
    theLongestWord([
      "aaallllaa",
      "aqaadqwr",
      "this is ok ",
      "ok this is longest",
      "timchuoidainhattrongmangvainrano",
    ])
  ).toEqual("timchuoidainhattrongmangvainrano");
});

test("tìm chuỗi dài nhất trong array và in nó ra ", () => {
  expect(
    theLongestWord([
      "aaallllaa",
      "aqaadqwr",
      "this is ok ",
      "ok this is longest",
      "timchuoidainhattrongmangvainrano",
      "aaaaa",
      "aa",
      "cscafdfff",
      "a222a",
      "cscafss77dfff",
      "ahjthisisoklameetingzoomjksklahasdasdasdasdasdasdsdiwyqhui",
    ])
  ).toEqual("ahjthisisoklameetingzoomjksklahasdasdasdasdasdasdsdiwyqhui");
});
