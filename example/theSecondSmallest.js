/**
 * Write a program that takes a list of numbers as input and returns the second smallest number in the list.
 * @param {array} numbers
 *
 */
function theSecondSmallest(numbers) {
  numbers.sort(function (a, b) {
    return a - b;
  });
  return numbers[1];
}
module.exports = theSecondSmallest;
