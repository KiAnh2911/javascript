/**
 * Write a program that takes a list of numbers as input and returns the sum of the numbers that are divisible by both 3 and 5.
 * @param {array} numbers
 */
function divisible(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
console.log(
  "divisible ~ divisible:",
  divisible([30, 30, 15, 6, 8, 60, 900, 220, 200, 300, 500, 150])
);
module.exports = divisible;
