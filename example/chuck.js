/**
 * chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.
 * @param {array} array
 * @param {number} target
 */

function chuck(array, target) {
  if (target <= 0) return [array];
  const numberArray = Math.floor(array.length / target);
  const remainder = array.length % target;
  const chunks = [];
  let startIndex = 0;
  for (let i = 0; i < target; i++) {
    const chunkSize = numberArray + (i < remainder ? 1 : 0);
    const endIndex = startIndex + chunkSize;
    chunks.push(array.slice(startIndex, endIndex));
    startIndex = endIndex;
  }
  return chunks;
}

console.log("chuck ~ chuck:", chuck(["1", "2", "4", "5", "6", "7", "8"], 5));
module.exports = chuck;
