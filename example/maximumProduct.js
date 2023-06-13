/**
 * Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list
 * @param {Array} arr
 */
function maximumProduct(arr) {
  let a = arr.sort(function (a, b) {
    return a - b;
  });
  const len = a.length;
  const product1 = a[0] * a[1] * a[len - 1];
  const product2 = a[len - 1] * a[len - 2] * a[len - 3];

  return Math.max(product1, product2);
}
console.log(
  "maximumProduct ~ maximumProduct:",
  maximumProduct([1, 2, 4, 6, 9, 2, 92, 2])
);
module.exports = maximumProduct;
