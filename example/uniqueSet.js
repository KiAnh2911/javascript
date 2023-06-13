/**
 * uniq: Cho một mảng đầu vào, viết một function để loại bỏ các phần tử bị lặp trong mảng.
 * @param {array} arr
 */
function uniq(arr) {
  let array = new Set(arr);
  return [...array];
}
console.log("uniq ~ uniq:", uniq([1, 1, 2, 3, 3, 2, 6, 5, 3, 4, 5, 4, 4, 5]));

module.exports = uniq;
