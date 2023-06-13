/**
 Write a program that takes a list of strings as input and returns the length of the longest substring that appears in every string in the list.
  * @param {Array} arr
  */
function substring(arr) {
  if (arr.length === 0) return 0;
  const strs = arr[0];
  let maxLength = 0;

  for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j <= strs.length; j++) {
      const substring = strs.substring(i, j);
      if (arr.every((str) => str.includes(substring))) {
        maxLength = Math.max(maxLength, substring.length);
      }
    }
  }
  return maxLength;
}
console.log(
  "substring ~ substring:",
  substring(["abcdefg", "abcde", "abcdef", "ab", "abc"])
);
module.exports = substring;
