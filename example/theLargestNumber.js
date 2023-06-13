/**
 * Write a program that takes a list of numbers as input and displays the largest number in the list.
 * @param {array} a
 */
function theLargestNumber(a) {
  let maxNumber = Math.max(...a);
  return maxNumber;
}

module.exports = theLargestNumber;
