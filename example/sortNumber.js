/**
 * Write a program that takes a list of numbers as input and sorts the list in ascending order.
 * @param { array}  numbers
 *
 */

function sortNumber(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers;
}
module.exports = sortNumber;
