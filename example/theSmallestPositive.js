/**
 * Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
 * @param {array} arr
 */
function theSmallestPositive(arr) {
  let smallest = 1; // khởi tạo the smallest positive chưa đc biểu diễn trên 1 tập hợp con

  arr.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= smallest) {
      smallest += arr[i];
    } else {
      break;
    }
  }
  return smallest;
}
module.exports = theSmallestPositive;
console.log(
  "theSmallestPositive ~ theSmallestPositive:",
  theSmallestPositive([1, 2, 3, 7, 8, 20])
);
console.log(
  "theSmallestPositive ~ theSmallestPositive:",
  theSmallestPositive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -15])
);
