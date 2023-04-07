const divisible = require("./divisible ");

test("tìm các số trong array chia hết cho 3 và 5 rồi cộng với nhau", () => {
  expect(divisible([220, 200, 300, 500, 150])).toBe(450);
});

test("tìm các số trong array chia hết cho 3 và 5 rồi cộng với nhau", () => {
  expect(divisible([30, 15, 6, 8])).toBe(45);
});

test("tìm các số trong array chia hết cho 3 và 5 rồi cộng với nhau", () => {
  expect(divisible([30, 15, 6, 8, 600])).toBe(645);
});

test("tìm các số trong array chia hết cho 3 và 5 rồi cộng với nhau", () => {
  expect(divisible([30, 15, 6, 8, 60, 900])).toBe(1005);
});

test("tìm các số trong array chia hết cho 3 và 5 rồi cộng với nhau", () => {
  expect(divisible([30, 30, 15, 6, 8, 60, 900, 220, 200, 300, 500, 150])).toBe(
    1485
  );
});
