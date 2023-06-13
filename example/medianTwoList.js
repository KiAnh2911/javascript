/**
 * Write a program that takes two lists of integers as input and returns the median of the combined list.
 * @param {Array } arr1
 * @param {Array } arr2
 */
function medianTwoList(arr1, arr2) {
  let arr = arr1.concat(arr2);
  arr.sort(function (a, b) {
    return a - b;
  });
  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middle] + arr[middle - 1]) / 2;
  } else {
    return arr[middle];
  }
}
console.log(
  "medianTwoList ~ medianTwoList:",
  medianTwoList([55, 78, 94, 12, 76, 23], [97, 34, 87, 0, 34, 75, 87])
);
module.exports = medianTwoList;
