/**
 * Write a program that takes a list of strings as input and returns the longest word in the list.
 * @param {array} strings
 */
function theLongestWord(strings) {
  let longestWord = "";
  strings.reduce(function (currentWord, nextWord) {
    if (nextWord.length > currentWord.length) {
      longestWord = nextWord;
      return nextWord;
    } else {
      return currentWord;
    }
  });
  return longestWord;
}

module.exports = theLongestWord;
console.log(
  "theLongestWord ~ theLongestWord:",
  theLongestWord(["aaaaa", "aa", "cscafdfff", "ahjhajaashjksklahiwyqhui"])
);
