const sortShortestString = require("./sortShortestString");

test("sort chuỗi theo độ dài tăng dần ", () => {
  expect(
    sortShortestString([
      "French bread",
      "wrap",
      "pastry",
      "Cupcake ",
      "pitta",
      "croissant",
      "pizza",
      "tart",
      "donut",
    ])
  ).toEqual([
    "tart",
    "wrap",
    "donut",
    "pitta",
    "pizza",
    "pastry",
    "Cupcake ",
    "croissant",
    "French bread",
  ]);
});

test("sort chuỗi theo độ dài tăng dần ", () => {
  expect(
    sortShortestString(["apple", "banana", "orange", "kiwi", "strawberry"])
  ).toEqual(["kiwi", "apple", "banana", "orange", "strawberry"]);
});

test("sort chuỗi theo độ dài tăng dần ", () => {
  expect(
    sortShortestString([
      "dog",
      "monkey",
      "cat",
      "fish",
      "chicken",
      "bird",
      "lion",
    ])
  ).toEqual(["cat", "dog", "bird", "fish", "lion", "monkey", "chicken"]);
});

test("sort chuỗi theo độ dài tăng dần ", () => {
  expect(
    sortShortestString([
      "violet",
      "red",
      "blue",
      "yellow",
      "green",
      "pink",
      "black",
    ])
  ).toEqual(["red", "blue", "pink", "black", "green", "violet", "yellow"]);
});

test("sort chuỗi theo độ dài tăng dần ", () => {
  expect(
    sortShortestString([
      "coca cola",
      "pesi",
      "orange juice",
      "nutifood",
      "water",
      "cafe latte",
    ])
  ).toEqual([
    "pesi",
    "water",
    "nutifood",
    "coca cola",
    "cafe latte",
    "orange juice",
  ]);
});
