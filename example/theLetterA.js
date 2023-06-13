/**
 * Write a program that takes a list of strings as input and returns the number of strings that contain the letter 'a'.
 * @param {array} strings
 *
 */
function theLetterA(strings) {
  let count = 0;
  for (let i = 0; strings.length > i; i++) {
    if (strings[i].includes("a")) {
      count = count + 1;
    }
  }
  return count;
}
console.log(
  "theLetterA ~ theLetterA:",
  theLetterA(["asd", "a", "bbsad", "drrr"])
);
module.exports = theLetterA;
