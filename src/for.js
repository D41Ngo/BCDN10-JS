// 1. for of: Lặp qua từng phần tử của mảng.
const listStudent = [
  {
    age: 20,
    name: "Nguyen Van A",
    addr: "Da Nang",
  },
  {
    age: 20,
    name: "Nguyen Van B",
  },
  {
    age: 20,
    name: "Nguyen Van C",
  },
];
// dài dòng hơn, biết được vị trí index.
// for (let i = 0; i < listStudent.length; i++) {
//   const student = listStudent[i];
//   console.log(student);
// }
// Mỗi lần lặp qua phần tử của listStudent thì chúng ta sẽ tạo một biến student và lưu trữ giá trị của phần tử đó.
// Không biết được vị trí index của student.
for (const student of listStudent) {
  console.log(student);
}
// --
// 2. for in: array, object: lấy key. Sử dụng cho Object
const [, , stu3] = listStudent; // destructuring.
for (const key in stu3) {
  console.log(key);
}
