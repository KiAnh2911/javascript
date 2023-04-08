/**
 * Write a program that takes a list of integers as input and returns the minimum number of moves required to sort the list in ascending order using bubble sort.
 * @param {array} numbers
 */
function theNumberBubbleSort(numbers) {
  let count = 0; // khởi tạo giá trị hoán đổi
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - i; j++) {
      if (numbers[j] > numbers[j + 1]) {
        // nếu pt j lớn hơn pt j + 1
        let temp = numbers[j];
        numbers[j] = numbers[j + 1]; // hoán đổi giá trị của 2 pt
        numbers[j + 1] = temp;
        count++; // tổng số bước hoán đổi cộng lên 1
      }
    }
  }
  return count; // trả về số bước hoán đổi tối thiểu
}
module.exports = theNumberBubbleSort;
console.log(
  "theNumberBubbleSort:",
  theNumberBubbleSort([3, 1, 4, 2, 6, 5, 0, 9, 11, 39])
);
