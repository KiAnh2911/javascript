/**
 * Switch Order: Viết function để thay đổi thứ tự order của các object
 * @param {Array} arr
 * @param {number,string} id
 * @param {number} newOrder
 */

function switchOrder(id, newOrder, arr) {
  const objIndex = arr.findIndex((obj) => obj.id === id);
  const obj = arr[objIndex];
  const oldOrder = obj.order;

  if (newOrder < 0 || newOrder >= arr.length) {
    throw new Error("New order is out of range.");
  }

  if (newOrder > oldOrder) {
    for (let i = oldOrder; i < newOrder; i++) {
      arr[i].order--;
    }
  } else if (newOrder < oldOrder) {
    for (let i = newOrder; i < oldOrder; i++) {
      arr[i].order++;
    }
  }
  arr.splice(objIndex, 1);
  obj.order = newOrder;
  arr.splice(newOrder, 0, obj);

  return arr;
}
module.exports = switchOrder;
