/**
 * TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.
 * @param {array} arr
 */
function trim(arr) {
  return arr.trim().replace(/\s+/g, " ");
}

module.exports = trim;
