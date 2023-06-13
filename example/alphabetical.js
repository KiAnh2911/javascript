/**
 * Write a program that takes a list of strings as input and sorts the list in alphabetical order.
 * @param { array } strings
 */
function alphabetical(strings) {
  strings.sort(function (a, b) {
    return a.localeCompare(b);
  });
  return strings;
}

module.exports = alphabetical;
