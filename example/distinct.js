/**
 * Write a program that takes a list of integers as input and returns the number of distinct subsequences of the list that sum up to a target value.
 * @param {Array} arr
 * @param {number} num
 */
function distinct(arr, target) {
  const n = arr.length;
  let count = 0;

  // Tạo bảng DP có n+1 hàng và target+1 cột
  const dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(target + 1).fill(0));

  // Khởi tạo giá trị cho DP[0][0]
  dp[0][0] = 1;

  // Lặp qua các phần tử trong mảng và tính giá trị cho bảng DP
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j <= target; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j >= arr[i - 1]) {
        dp[i][j] += dp[i - 1][j - arr[i - 1]];
      }
    }
  }

  // Lấy giá trị cuối cùng từ bảng DP để đếm số lượng dãy con khác nhau có tổng bằng target
  count = dp[n][target];

  return count;
}
module.exports = distinct;
console.log("distinct ~ distinct:", distinct([1, 2, 3, 3, 4, 5, 6, 7], 9));
