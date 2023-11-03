// var firstName = "Nguyen Van BC";
// = : phép gán.
// [Dev A]
var firstName; // khai báo
firstName = "Nguyen Van BC"; // gán giá trị
// ------------
// [Dev B]
var firstName = "Nguyen Van A"; // Khai báo + khởi tạo giá trị
// ------------
// * Chú Ý: tránh việc khai báo trùng tên biến, ES6: let

var tuoi = 20;
/**
 * -- Primitive Type: Kiểu dữ liệu nguyên thủy.
 *
 * Number, String, Boolean, Null, Undefined: kiểu dữ liệu ( data type ).
 *
 * - 1,2,3,4,5,-1,-2,-3: giá trị của kiểu dữ liệu Number.
 * - "Nguyen Van A", "hello world": giá trị của kiểu dữ liệu String.
 * - true, false: giá trị của kiểu dữ liệu Boolean.
 */

var diaChi = 20;

var x = 10;
var y = 20;

// biểu thức: thực thi bên phải trước, có giá trị sẽ gán qua phía bên tay trái.
var z = x == y; // == phép toán so sánh trong js
// console.log(z); // false
// ------------------------------
// khai báo biến và gán bằng một giá trị của biến khác.
var x = 10;
var y = x; // gán giá trị của x cho biến y.

// ----------------------------
var x = 10;
// x++;
x = x + 1;
x += 1;

// ------------
var x = 10;
// x--;
x = x - 1;
x -= 1;

// -------
x = x + 2;
x += 2;
// ------------
x /= 3;
x = x / 3;
// ------------
x *= 3;
x = x * 3;
// ------------
x %= 3;
x = x % 3;
// ----------
// 3.2: thập phân
// Math.floor: dùng để chuyển số thập phân về số nguyên và làm tròn xuống.
// Math.ceil: dùng để chuyển số thập phân về số nguyên và làm tròn lên.
Math.ceil(3.2); // 4
Math.floor(3.2); // 3
Math.floor(3.5); // 3
Math.floor(3.6); // 3
Math.floor(3.9); // 3
// -------------------
// Để tạo hằng số. số pi: 3.14
const PI = 3.14;
// PI = 3.12; (❌)
// var PI = 3.14;
// PI = 3.12;

// ======================================
// -- Kết Luận --
// var: cho phép gán lại giá trị. (bug) khai báo trùng tên biến mà không lỗi.
// const: không cho phép gán lại giá trị. Không cho phép khai báo trùng tên biến.

/**
 * cho x=3;
 * cho y = 4 - 1;
 * x = y? phép so sánh trong toán học
 */

/**
 * Hai dữ liệu này tượng trưng cho việc không mang giá trị nào cả.
 *
 * - undefined: vừa là kiểu dữ liệu, vừa là giá trị.
 * - null: vừa là kiểu dữ liệu, vừa là giá trị.
 */
