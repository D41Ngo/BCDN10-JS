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
// ---------------------
/**
 * 1.) Cho 1 mảng số tìm số lớn nhất và index của số đó. In ra màn hình.
 * vd: numbers =  [8,1,23,4,5,29,2,5,2,1,6]
 * Số lớn nhất là: 29.
 * Index số đó là: 4.
 */

/**
 * 1. Để in ra màn hình.
 * tạo một biến lưu trữ giá trị của số lớn nhất. var max;
 * tạo một biến lưu trữ index của số lớn nhất. var indexMax;
 *
 * 2. Tìm được giá trị lớn nhất, index của nó.
 * Cho biến lưu trữ giá trị lớn nhất có giá trị là phần tử đầu tiên của mảng. max = numbers[0]
 * Duyệt qua lần lượt từng phần tử của mảng, để so sanh giá trị lớn nhất hiện tại (max) có phải thực sự là giá trị lớn nhất hay chưa.
 * - false: chúng ta sẽ gán lại giá trị cho biến max.
 * - true: chúng ta sẽ bỏ qua vòng lặp hiện tại.
 *
 * 3. In ra màn hình.
 *
 */
// Bước 1:
var numbers = [8, 1, 23, 4, 5, 29, 2, 5, 2, 1, 6];
// 23: numbers[2]
// 29: numbers[5]
var max = numbers[0];
var indexMax = 0;
// Bước 2:
// Cách 1: for
// Tăng hiệu suất của ứng dụng. Tránh trường hợp tính đi tính lại chiều dài của mảng sau mỗi vòng lặp.
// for (let i = 1; i < numbers.length; i++)
var lengthArray = numbers.length;

for (let i = 1; i < lengthArray; i++) {
  // numbers[i]: lấy phần tử hiện tại của mảng với index: i
  // numbers[1]
  if (max < numbers[i]) {
    max = numbers[i];
    indexMax = i;
  }
}

// Cách 2: method array. forEach nhận vào 1 function
/**
 * Khi gọi forEach thì bên trong nó sẽ gọi lại callBack function các bạn truyền vào
 * Truyền cho callBack function 3 tham số.
 * - 1. Phần tử của mảng.
 * - 2. Index của phần tử đó.
 * - 3. Chính là mảng đó.
 * Thường thì chỉ lấy 2 tham số 1 và 2 để xử lý
 *  */
numbers.forEach(function callBack(num, index) {
  console.log(`index:${index} ${num}`);

  // for: numbers[index]
  // forEach: num chính là numbers[index] trong for

  // so sanh giá trị lớn nhất hiện tại (max) có phải thực sự là giá trị lớn nhất hay chưa.
  if (max < num) {
    // Gán lại giá trị max
    max = num;
    // Gán lại index.
    indexMax = index;
  }
});

// Bước 3:
document.getElementById(
  "kq-10"
).innerHTML = `Số lớn nhất là: ${max} và Index là: ${indexMax}`;

// ==========================

/**
 * 2.) Cho người nhập số vào mảng sau đó tính tổng các số lẻ người dùng đã nhập vào. In ra màn hình.
 *
 * 1. Khai báo biến.
 * var giaTriNguoiDungNhapVao;
 * var mangGiaTriNguoiDungNhapVao;
 * var tongCacSoLe;
 *
 * 2.
 * Điều kiện (trigger): Khi click vào button thêm.
 *  - Lấy giá trị người dùng nhập vào và gán cho biến [giaTriNguoiDungNhapVao]
 *  - Thêm biến [giaTriNguoiDungNhapVao] vào cuối mảng [mangGiaTriNguoiDungNhapVao]
 *    - mangGiaTriNguoiDungNhapVao.push(giaTriNguoiDungNhapVao)
 *
 * Điều kiện (trigger): Khi click vào button tính tổng số lẻ.
 *  - duyệt qua từng phần tử của mảng và tính tổng các số lẻ.
 *
 * 3. Hiển thị kết quả ra màn hình.
 * - Hiển thị mảng người dùng đã nhập.
 * - Hiển thị tổng các số lẻ.
 */

// 1.
var giaTriNguoiDungNhapVao;
var mangGiaTriNguoiDungNhapVao = [];
var tongCacSoLe = 0;

// 3.
document.getElementById("them-10").onclick = function () {
  // 2.
  // - Lấy giá trị ô input
  // Ép kiểu String -> Number
  giaTriNguoiDungNhapVao = +document.getElementById("input-10").value;
  // - Thêm vào mảng.
  mangGiaTriNguoiDungNhapVao.push(giaTriNguoiDungNhapVao);

  // ------------
  document.getElementById("show-10").innerHTML = mangGiaTriNguoiDungNhapVao;

  //-- Reset ô input.
  document.getElementById("input-10").value = "";
  //-- Focus lại vào ô input khi người dùng nhấn button thêm xong.
  document.getElementById("input-10").focus();
};
document.getElementById("tt-10").onclick = function () {
  // Cách 1: for
  var length = mangGiaTriNguoiDungNhapVao.length;
  for (let i = 0; i < length; i++) {
    var item = mangGiaTriNguoiDungNhapVao[i];

    if (item % 2 !== 0) {
      tongCacSoLe += item;
    }
  }

  // Cách 2: forEach
  mangGiaTriNguoiDungNhapVao.forEach(function (item) {
    if (item % 2 !== 0) {
      tongCacSoLe += item;
    }
  });

  // ------------
  document.getElementById(
    "kq-11"
  ).innerHTML = `Tổng các số lẻ người dùng đã nhập vào là: ${tongCacSoLe}`;
};
