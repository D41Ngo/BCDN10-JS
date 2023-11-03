/**
 *
 */

var x = 10;
var y = 20;

console.log("x = ", x);
console.log("y = ", y);
console.log("x > y: ", x > y); // sai | false
console.log("x < y: ", x < y); // đúng | true
console.log("x == y: ", x == y); // sai | false
console.log("x != y: ", x != y); // đúng | true

// Thuần JS: so sánh 3 dấu bằng
console.log("x === y: ", x === y); // sai | false
console.log("x !== y: ", x !== y); // đúng | true
// ==========================
/**
 * == : nếu như so sánh 2 kiểu dữ liệu khác nhau, thì nó sẽ ép về cùng kiểu dữ liệu rồi mới bắt đầu so sánh.
 *
 * === : khác kiểu dữ liệu là false ngay lập tức.
 */

var num = "10";
console.log(typeof number); // string
// chuyển biến num về kiểu Number
// Cách ép kiểu dữ liệu.
num = Number(num); // chuyển kiểu String của biến num về kiểu Number
num = String(num); // chuyển kiểu Number của biến num về kiểu String
num = Boolean(num); // chuyển kiểu String của biến num về kiểu Boolean

console.log(typeof number); // number
// ==================================
console.log(true == 2);
/**
 * Các bước trình duyệt thực thi code:
 *
 * Boolean(true) == Boolean(2)
 * true == true
 */

console.log("hihi" == 2);
// ==================================
console.log("true === 2", true === 2);
// * Chú Ý: nên sử dụng ===, không nên sử dụng ==.
// * == sinh ra nhiều ngoại lệ, không nên sử dụng.
// * === tối ưu về hiệu suất của chương trình.

// ----------------------
// Nếu trời mưa thì mình sẽ ở nhà, ngược lại thì mình sẽ đi chơi

var isTroiMua = true;
/**
 * dieuKien: - phải kiểu dữ liệu => Boolean.
 *           - Nếu truyền sai kiểu dữ liệu thì nó sẽ ép lên kiểu Boolean.
 *
 * if(dieuKien){
 *    [code thực thi]
 * } else {
 * }
 *
 * nếu điều kiện: có giá trị là true, thì sẽ thực thi đoạn code bên trong dấu ngoặc nhọn trong if.
 * nếu điều kiện: có giá trị là false, thì nó sẽ thực thi đoạn code bên trong dấu ngoặc nhọn else.
 */
var diemSo = 6;

//  ????????
// Boolean(9)
if (9) {
  console.log("Mình sẽ ở nhà.");
} else {
  console.log("Mình sẽ đi chơi.");
}
