var d;

// == Đầu file ==
var a = 10;
if (3 < 5) {
  var a = 20; // không phải cả 2
}
console.log(a); // 20 => mong muốn: 10
// == 1. Variable ==

// 1. let: gán lại giá trị. [ES6]
// 2. const: không thể gán lại giá trị. [ES6]
// 3. var: gán lại giá trị. [ES5]

// -- scope --
// 1. Global
// 2. Local (function)
// 3. Block

// -- bug --
// 1. var: không phân biệt được block scope
// 2. var: có thể khai báo trùng tên biến.
// var f = 10;
// var f = 20;

// let h = 30;
// let h = 40;

let b = 10;
if (3 < 5) {
  let b = 20; // không phải cả 2
}
b = 30;
b = 40;
console.log(b);
// -- kết luân --
// 3. let phân biệt được block scope -> giải quyết được vấn đề của var.
// 4. let không được khai báo trùng tên biến.

// -- Hoisting --
// Đưa khai báo biến, [__] lên trên đầu trang.
// 1. var: có cơ chế hoisting.
console.log("d", d);
var d = 50;
// 2. let, const: không có cơ chế hoisting.
// let, const: Có cơ chế hoisting. nhưng được được vào vùng Temporal Dead Zone mà không được sử dụng trước khi nó khởi tạo.
// console.log("e", e);
// const e = 1;
