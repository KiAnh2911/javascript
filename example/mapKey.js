/**
 * MapKey: Cho 1 mảng các key, vào 1 mảng các object , Viết một function để trả ra một mảng các object theo thứ tự mảng các key. ( Yêu cầu dùng hàm map )
 * @param {object, array} collections
 * @param {array} keys
 */
function mapKey(collections, keys) {
  let objs = collections.map((obj) => {
    return keys.reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
  });
  return objs.filter((obj) =>
    Object.values(obj).every((val) => val !== undefined)
  );
}
module.exports = mapKey;
const keys = ["b", "a", "c"];
const collections = [
  { a: 1, b: 1, c: 2, d: 4, e: 5 },
  { a: 2, b: 1, c: 5, d: 4, e: 5 },
  { d: 4, e: 5, h: 22, b: 11, c: 51, f: 9 },
];

const filteredObjects = mapKey(
  [
    { name: "John", age: 30, gender: "male" },
    { name: "Marry", age: 25, gender: "female" },
    { name: "Tom", age: 35, address: "123 Main St" },
  ],
  ["name", "age", "gender"]
);

console.log(filteredObjects);
