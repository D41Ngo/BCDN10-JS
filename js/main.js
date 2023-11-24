var listSinhVien = [];

function SinhVien(hinhAnh, ten, dtb) {
  this.hinhAnh = hinhAnh;
  this.ten = ten;
  this.diemTrungBinh = dtb;
}

// ---------------
// 1. Lấy tất cả thẻ tr. Vì mỗi thẻ tr chứa thông tin của từng sinh viên.
var listTr = document.querySelectorAll("table#tableSinhVien tbody tr"); // ✅
// console.log(listTr); // check ✅
// 2. Duyệt qua từng thẻ tr để lấy thông tin của sinh viên
var length = listTr.length;
for (var i = 0; i < length; i++) {
  var ele = listTr[i];

  // --------------
  var img = ele.querySelector("td:nth-child(2) img").src;
  var ten = ele.querySelector("td:nth-child(3)").innerHTML;
  var dtb = ele.querySelector("td:nth-child(4)").innerHTML;

  //   console.log(img, ten, dtb); ✅
  // Tạo đối tượng sinh viên và thêm vào mảng
  var sinhVien = new SinhVien(img, ten, dtb);

  listSinhVien.push(sinhVien);
}

console.log(listSinhVien);
/**
 * getElementById, by class, by tagname
 * querySelector, querySelectorAll
 *
 * Element nào cũng có những method này. Không chỉ một mình document.
 */

var soSvGioi = 0;
var soSvCoDtbHon5 = 0;

listSinhVien.forEach(function (sv) {
  if (sv.diemTrungBinh >= 8) {
    soSvGioi++;
  }

  if (sv.diemTrungBinh >= 5) {
    soSvCoDtbHon5++;
  }
});

console.log(soSvCoDtbHon5, soSvGioi);
