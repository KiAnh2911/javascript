/**
 *Group by: Cho đầu vào là 1 collection ( array of object ), Viết một function để trả ra 1 OBJECT mới chứa dữ liệu được group theo trường chỉ định.
 * @param {Array} collection
 * @param {string} property
 */
function groupBy(collection, property) {
  return collection.reduce(function (acc, obj) {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}
module.exports = groupBy;
console.log(
  "groupBy ~ groupBy:",
  groupBy(
    [
      { a: 1, b: 2 },
      { a: 1, b: 3 },
      { a: 2, b: 2 },
    ],
    "b"
  )
);
