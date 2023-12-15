const name = "Mị";
const age = 20;

// const obj = {
//   name: name,
//   age: age,
// };
// Nếu tên thuộc tính và tên biến trùng nhau thì có thể rút gọn về còn 1.
const obj = {
  name,
  age,
};

// -- Tên thuộc tính được truyền thông qua biến. --
const thuocTinh = "dayLaThuocTinhDong";

const stu = {
  addr: "Da Nang",

  // dayLaThuocTinhDong: true,
  [thuocTinh]: true,
};

console.log(stu);
