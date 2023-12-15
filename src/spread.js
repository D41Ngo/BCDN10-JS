// == 1. Copy Object ==
// == [ES5] ==
const studentA = {
  fullName: "Nguyen Van A",
  score: 9.5,
};
// Muốn copy tất cả thuộc tính và giá trị của studentA, chỉ đổi giá trị fullName
// Không được cùng địa chỉ

// Object.assign(target, source) => copy tất cả các thuộc tính và giá trị của source vào trong target
/**
 * target = {
 *  fullName: "Nguyen Van A",
 *  score: 9.5,
 * }
 */
const studentB = Object.assign({}, studentA);
studentB.fullName = "Nguyen Van B";

console.log({
  studentA,
  studentB,
});
// == [ES6] == : spread operator
const studentC = {
  ...studentA,
  /*
    ... =>
    Bỏ dấu nhọn ngoài cùng của studentA
    fullName: "Nguyen Van A",
    score: 9.5,
  */

  fullName: "Nguyen Van C",
  age: 20,
};

console.log({
  studentA,
  studentC,
});

const studentD = {
  a: 10,
  a: 20,

  b: 30,
  b: 40,
};

console.log({
  studentD,
});

// == 2. Copy Array ==
// == [ES5] ==
const nums1 = [1, 2, 3, 4, 5];
const nums2 = nums1.slice(0, nums1.length); // [].concat(nums1);
// == [ES6] ==
const nums3 = [6, ...nums1, 6, ...nums1, ...nums1]; // [6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5]
console.log({ nums3 });
