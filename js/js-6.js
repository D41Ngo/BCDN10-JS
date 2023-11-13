/**
 * Vòng lặp.
 * - while: ít dùng.
 * - do-while: ít dùng.
 * - for: dùng nhiều nhất.
 *
 *
 * Kiểm tra điều kiện -> đúng -> Xử lý code bên trong -> quay lại kiểm tra điều kiện -> đúng -> Xử lý code bên trong -> quay lại kiểm tra điều kiện -> sai -> thoát khỏi vòng lặp.
 *
 *
 * Chú Ý: Xác định được điều kiện để kết thúc vòng lặp.
 */

// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

//-- while
/**
 * Tạo một biến lưu trữ giá trị số lần đã được in ra.
 * Nếu đã in ra đủ 10 lần thì chúng ta dừng vòng lặp.
 */

// while(dieu_kien){
//     // logic
// }

// 0 -> 10 = 11
// 0 -> 9 = 10
var soLanDaDuocIn = 0; // (1) khởi tạo
while (soLanDaDuocIn <= 9) {
  // (2) điều kiện
  console.log("hello world");

  // soLanDaDuocIn += 1;
  // Sau khi in xong thì tăng biến đếm lên +1
  soLanDaDuocIn++; // (3) Bước nhảy.
}

console.log("Kết thúc vòng lặp.");

// =============================
// BT7: Nhập vào số lần in ra thẻ div.

document.getElementById("btn-7").onclick = function () {
  var soLanCanTaoTheDiv = Number(document.getElementById("inp-7").value);

  // soLanCanTaoTheDiv = 5
  var soLanDaTaoTheDiv = 0;

  var content = "";
  while (soLanDaTaoTheDiv < soLanCanTaoTheDiv) {
    // content +=
    //   "<div class='px-2 bg-primary'>The Div" +
    //   (soLanDaTaoTheDiv + 1) +
    //   "</div>";

    // template string: `` dùng ${} để truyền giá trị chúng ta muốn thêm vào string.
    content += `<div class='px-2 bg-primary'>The Div ${
      soLanDaTaoTheDiv + 1
    }</div>`;

    soLanDaTaoTheDiv++;
  }

  document.getElementById("kq-7").innerHTML = content;
};

// -- for
// bieu_thuc_1: khởi tạo.
// bieu_thuc_2: kiểm tra điều kiện.
// bieu_thuc_3: Tăng biến đếm.

// for(bieu_thuc_1; bieu_thuc_2; bieu_thuc_3){    }
for (var soLanDaIn = 0; soLanDaIn < 10; soLanDaIn++) {
  console.log("CyberSoft");
}
// =================================
// BT8: Cho người dùng nhập vào một số nguyên n và tính tổng từ 1 -> n. In Kq ra màn hình.
// 5: 1+2+3+4+5 = 15
// 6: 1+2+3+4+5+6 = 21

document.getElementById("btn-8").onclick = function () {
  // Chuyển String -> Number;
  var n = +document.getElementById("inp-8").value;
  // n = 2
  var tong = 0;
  for (var dem = 1; dem <= n; dem++) {
    tong += dem;
  }

  //   document.getElementById("kq-8").innerHTML = "Kết quả: " + tong;
  document.getElementById("kq-8").innerHTML = `Kết quả: ${tong}`;
};

// BT9: Cho người dùng nhập vào một số nguyên n và tính tổng các số lẻ từ 1 -> n (có thể bao gồm n). In Kq ra màn hình.
// 5: 1 + 3 + 5 = 9
document.getElementById("btn-9").onclick = function () {
  // Chuyển String -> Number;
  var n = +document.getElementById("inp-9").value;
  // n = 2
  var tong = 0;
  for (var dem = 1; dem <= n; dem++) {
    // Nếu là số lẻ thì mới + vào
    if (dem % 2 === 1) {
      tong += dem;
    }
  }

  //   document.getElementById("kq-8").innerHTML = "Kết quả: " + tong;
  document.getElementById("kq-9").innerHTML = `Kết quả: ${tong}`;
};

// -- do while
// Làm trước, kiểm tra điều kiện sau.
// do{
// } while()

// print ra chữ cyber soft 4 lần
var dem = 0;

do {
  console.log("Cyber Soft");
  dem++;
} while (dem < 4);

/**
 * break: dừng lập tức vòng lặp.
 * continue: bỏ qua vòng lặp hiện tại, chạy vòng lặp tiếp theo.
 */

var n = 10;
// var dem = 1, tong = 0 Tạo biến trên cùng một dòng, cách nhau bằng dấu ,
for (var dem = 1, tong = 0; dem <= n; dem++) {
  // Nếu là số lẻ thì mới + vào
  if (dem % 2 === 0) {
    console.log("Đây là số chẵn.");
    break;
  }

  tong += dem;
}

// i=3
for (var i = 0; i < 3; i++) {
  // j=0
  for (var j = 0; j < 3; j++) {
    console.log(j); // 012 012 012
  }
  console.log(i); // 0 1 2
}
// 012 0 012 1 012 2
