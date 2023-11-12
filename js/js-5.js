/**
 * Function:
 * - Công dụng:
 *          - Chia nhỏ vấn đề để xử lý.
 *          - Tái sử dụng.
 *          - Dễ bảo trì.
 * - Cú pháp (syntax) khai báo function:
 *          - function ten-ham(tham_so1, tham_so2){
 *              // code xử lý bên trong hàm
 *          }
 * - Gọi function:
 *          ten-ham + (input1,input2)
 *          => ten-ham(input1, input2)
 * - Chú Ý: 1 function chỉ nên thực hiện một nhiệm vụ duy nhất.
 * - Khi nào đoạn code bên trong function thực thi? Khi chúng ta gọi function đó. Để gọi 1 function "tenFunction + ()".
 */

console.log("function");

/**
 * BT5: Viết hàm tính tổng 2 số và in ra màn hình
 */

function tinhTong2So(ts1, ts2) {
  var kq = ts1 + ts2;

  return kq;
}

/**
 * Code thực thi: Chạy tuần tự từ trên xuống dưới, và khi thực hiện function nào thì phải xong function đó rồi mới làm việc khác.
 */

// --------------------------------
console.log(1);
function print() {
  console.log(2);
}
console.log(3);
print();
console.log(4);
print();
console.log(5);
// --------------------------------
// kq: 1 3 4 5;
// kq: 1 3 4 5 2;
// kq: 1 3 2 4 2 5;
document.getElementById("btn-5").onclick = function () {
  // lấy giá trị 2 ô input
  var ts1 = Number(document.getElementById("thamSo1").value);
  var ts2 = Number(document.getElementById("thamSo2").value);

  var kq = tinhTong2So(ts1, ts2);

  var eleKq = document.getElementById("kq5");
  eleKq.innerHTML = "kết quả: " + kq;
};

// BT6: Tăng giảm font size
function thayDoiFontSize(fz) {
  document.getElementById("p6").style.fontSize = fz + "px";
}

var fontSize = 16; // để biết giá trị font-size hiện tại.

document.getElementById("btn6-1").onclick = function () {
  fontSize++;

  thayDoiFontSize(fontSize);
};

document.getElementById("btn6-2").onclick = function () {
  fontSize--;

  thayDoiFontSize(fontSize);
};
// =========================
function tinhTong(ts1, ts2) {
  console.log(ts1 + ts2);
}
tinhTong(2, 3);
//------------
var tinhTong = function (ts1, ts2) {
  console.log(ts1 + ts2);
};
tinhTong(3, 4);
// =========================
