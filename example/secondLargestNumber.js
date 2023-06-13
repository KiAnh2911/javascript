/**
 * Write a program that takes a list of numbers as input and returns the second largest number in the list.
 * @param {Array} numbers
 */

function secondLargestNumber(numbers) {
  let second = numbers.sort(function (a, b) {
    return b - a;
  });
  return second[1];
}
console.log(
  "secondLargestNumber ~ secondLargestNumber:",
  secondLargestNumber([1, 9, 4, 7, 2, 78, 20])
);
module.exports = secondLargestNumber;
