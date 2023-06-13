/**
 Viết chương trình nhập vào một danh sách các số nguyên và trả về tổng lớn nhất của bất kỳ mảng con liền kề nào trong danh sách.
 * @param {array} arr
 *  
 * */
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];
  for (let i = 1; i < arr.length; i++) {
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
module.exports = maxSubarraySum;
