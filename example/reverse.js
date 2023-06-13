/**
 * reverses: Cho đầu vào là 1 mảng, Viết một function để đảo ngược thứ tự phần tử trong mảng , yêu cầu không dùng hàm Reverses có sẵn của javascript ( dùng forEach hoặc reduce )
 * @param {array} arr
 */
function reverses(arr) {
  const arrReverse = [];
  arr.forEach((item) => {
    arrReverse.unshift(item);
  });
  return arrReverse;
}
console.log(reverses([1, 2, 3, 7, 9, 4, 2]));
module.exports = reverses;
