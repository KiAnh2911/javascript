const groupBy = require("./groupBy");

test("1 OBJECT mới chứa dữ liệu được group theo trường chỉ định", () => {
  expect(
    groupBy(
      [
        { name: "John", age: 20, major: "Math" },
        { name: "Jane", age: 19, major: "English" },
        { name: "Tom", age: 21, major: "Math" },
        { name: "Alice", age: 22, major: "Physics" },
        { name: "Bob", age: 20, major: "English" },
      ],
      "major"
    )
  ).toEqual({
    Math: [
      { name: "John", age: 20, major: "Math" },
      { name: "Tom", age: 21, major: "Math" },
    ],
    English: [
      { name: "Jane", age: 19, major: "English" },
      { name: "Bob", age: 20, major: "English" },
    ],
    Physics: [{ name: "Alice", age: 22, major: "Physics" }],
  });
});

test("1 OBJECT mới chứa dữ liệu được group theo trường chỉ định", () => {
  expect(
    groupBy(
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 },
      ],
      "a"
    )
  ).toEqual({
    1: [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
    ],
    2: [{ a: 2, b: 2 }],
  });
});

test("1 OBJECT mới chứa dữ liệu được group theo trường chỉ định", () => {
  expect(
    groupBy(
      [
        { a: 1, b: 2 },
        { a: 1, b: 3 },
        { a: 2, b: 2 },
      ],
      "b"
    )
  ).toEqual({
    2: [
      { a: 1, b: 2 },
      { a: 2, b: 2 },
    ],
    3: [{ a: 1, b: 3 }],
  });
});
