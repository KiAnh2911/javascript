/**Write a program that takes a string as input and returns the number of words in the string.
 * @param {string} strings
 */

function theNumberWord(strings) {
  strings = strings.trim();
  const numberWord = strings.split(" ");
  return numberWord.length;
}
module.exports = theNumberWord;
