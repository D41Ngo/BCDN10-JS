/**
 * Array, Object.
 */

// -- Array
var stu1 = "Phu";
var stu2 = "Phat";
var stu3 = "Duy";
var stu4 = "Thinh";
var stu5 = "Cuong";
/**
 * Cách tạo ra một array: Sử dụng dấu ngoặc []
 * () {} => (❌) sai cú pháp
 */

// --- 1. Tạo một array ---
// Mảng lớp học: và mỗi bạn là một phần tử (element).
// C1: 98%
var lopHoc = ["Phu", "Phat", "Duy", "Thinh", "Cuong"];
// C2: Ít dùng, 2%
// var lopHoc = new Array()

// --- 2. Truy xuất phần tử của array ---

// index: array.
// để lấy được phần tử trong array. array[index]

// console.log(lopHoc[0]); // Phu
// console.log(lopHoc[3]); // Thinh

// --- 3. Duyệt Từng phần tử của array ---
// var soLuongPhanTu = lopHoc.length;
for (
  var index = 0, soLuongPhanTu = lopHoc.length;
  index < soLuongPhanTu;
  index++
) {
  console.log(lopHoc[index]);
}

// --- 4. Một vài phương thức thông dụng của array ---
var numbers = [1, 2, 3, 4, 5, 9, 2, 2, 3, 5, 6, 6, 7, 8];

// Thêm vào cuối mảng số 6: push
console.log("-- push before --", numbers);
var rs1 = numbers.push(6);
console.log("rs1 ::", rs1);
console.log("-- push after --", numbers);
// Thêm vào đầu mảng số 7: unshift
console.log("-- unshift before --", numbers);

console.log(numbers.unshift(7));

console.log("-- unshift after --", numbers);
// Xóa phần tử cuối mảng: pop
console.log("-- pop before --", numbers);

console.log(numbers.pop(7));

console.log("-- pop after --", numbers);
// Xóa phần tử đầu mảng: shift
console.log("-- shift before --", numbers);

console.log(numbers.shift(7));

console.log("-- shift after --", numbers);

/**
 * splice(
 *  index_chung_ta_muon_can_thiep,
 *  so_luong_phan_tu_muon_xoa,
 *  phan_tu_muon_them_vao
 * )
 */
//var numbers=[1, 2, 8, 3, 4, 5];

var numbers = [1, 2, 3, 4, 5];
//var numbers=[1, 2, 3, 4, 8, 5]; // mong muon
// Thêm phần tử index số 2 là số 8:
console.log("-- splice them before --", numbers);
console.log(numbers.splice(4, 0, 8));
console.log("-- splice them after --", numbers);
// Xóa phần tử index số 2:
var numbers = [1, 2, 3, 4, 5];
console.log("-- splice xóa before --", numbers);
console.log(numbers.splice(2, 1));
console.log("-- splice xóa after --", numbers);
// Xóa phần tử index số 2 và thêm vào đó số 9:
var numbers = [1, 2, 3, 4, 5];
console.log("-- splice xóa + thêm before --", numbers);
numbers.splice(2, 3, 9);
console.log("-- splice xóa + thêm after --", numbers); // [1, 2, 9]

// -- slice: lấy phần từ index_start < index_end
var numbers = [1, 2, 3, 4, 5];
// [2,3,4]
console.log("-- before slice --", numbers);
console.log(numbers.slice(1, 4));
console.log("-- after slice --", numbers);
// Đổi thứ tự mảng.
console.log("-- before reverse --", numbers);
numbers.reverse();
console.log("-- after reverse --", numbers);
// --- 5. Chú ý ---
/**
 * Array trong JS cho phép chúng ta có thể lưu được tập hợp các phần tử khác kiểu dữ liệu. Vừa Number vừa String vừa Boolean. Không bắt buộc các phần tử giống nhau về kiểu dữ liệu.
 *
 * var arr = ['hello', 1, true, null]
 *
 * Tuple: Đối với ngôn ngữ khác.
 *
 *
 *
 * - Method của array:
 *      - 1. Sau khi gọi method của array thì trả về gì.
 *      - 2. Có thay đổi mảng gốc hay không.
 */
