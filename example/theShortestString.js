/**
 * Write a program that takes a list of strings as input and displays the shortest string in the list
 * @param {array} strings
 */

function theShortestString(strings) {
  let shortest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length < shortest.length) {
      shortest = strings[i];
    }
  }
  return shortest;
}

module.exports = theShortestString;
