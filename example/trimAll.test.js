const trim = require("./trimAll");

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng", () => {
  expect(trim("    hello     world   ")).toEqual("hello world");
});

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng", () => {
  expect(trim("    hello     world   kkkk   ")).toEqual("hello world kkkk");
});

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng", () => {
  expect(trim("    I    am    Mu        ")).toEqual("I am Mu");
});

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng", () => {
  expect(trim("   Laptop       made       in        China   ")).toEqual(
    "Laptop made in China"
  );
});

test("loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng", () => {
  expect(trim("    hello     world   Viet      Nam ")).toEqual(
    "hello world Viet Nam"
  );
});
