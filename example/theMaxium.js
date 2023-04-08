/**
 * Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.
 * @param {array} numbers
 */

function theMaxiumDifference(numbers) {
  let maxDiff = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] - numbers[i] > maxDiff) {
        maxDiff = numbers[j] - numbers[i];
      }
    }
  }
  return maxDiff;
}
console.log(
  "theMaxiumDifference ~ theMaxiumDifference:",
  theMaxiumDifference([1, 2, 3, 119, 1271, 4, 89, 227, 29])
);
module.exports = theMaxiumDifference;
