/**
 *Write a program that takes a list of numbers as input and returns the median of the numbers.
 * @param {array} numbers
 */

function median(numbers) {
  const sortMedian = numbers.sort(function (a, b) {
    return a - b;
  });
  const middle = Math.floor(sortMedian.length / 2);
  return sortMedian.length % 2 !== 0
    ? sortMedian[middle]
    : (sortMedian[middle] + sortMedian[middle - 1]) / 2;
}

module.exports = median;
