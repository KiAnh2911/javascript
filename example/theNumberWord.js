/**
 * @param {string} strings
 */

function theNumberWord(strings) {
  strings = strings.trim();
  const numberWord = strings.split(" ");
  return numberWord.length;
}
module.exports = theNumberWord;
