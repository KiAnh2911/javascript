const theLetterA = require("./theLetterA");

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(theLetterA(["avbc", "bbxxcvv", "asadfqw", "ccsaff"])).toBe(3);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(theLetterA(["asd", "a", "bbsad", "drrar"])).toBe(4);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(theLetterA(["sd", "", "bbsd", "drrr"])).toBe(0);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(theLetterA(["sd", "ad", "bbsd", "drrr", "dhdshas"])).toBe(2);
});

test("đếm số chuỗi có kí tự a trong 1 list strings", () => {
  expect(
    theLetterA([
      "sd",
      "ad",
      "bbsd",
      "drrr",
      "dhdshas",
      "avbc",
      "bbxxcvv",
      "asadfqw",
      "ccsaff",
    ])
  ).toBe(5);
});
