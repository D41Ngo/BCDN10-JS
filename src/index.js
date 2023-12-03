// Tạo đối tượng danh sách sinh viên.
// Sẽ sử dụng ở nhiều nơi, nên chúng ta sẽ tạo nó ở phạm vi global.
// Vì sao không tạo nó ở bên trong hàm gắn cho onsubmit? vì để lưu trữ lại những sinh viên đã được lưu trước đó.
var dssv = new ListSinhVien();

// ==========
var eleForm = document.querySelector("form");

eleForm.onsubmit = function (event) {
  // ngăn chặn reload lại trang, hành vi mặc định của thẻ form
  event.preventDefault();

  /**
   * 1. Lấy tất cả các giá trị trên form.
   * 2. Tạo một đối tượng SinhVien
   * 3. Lưu đối tượng sinh viên vào danh sách sinh viên
   *
   * 4. Render lại giao diện table.
   */

  var listEle = document.querySelectorAll(
    ".form-sinh-vien input:not([disabled]),.form-sinh-vien select"
  );

  console.log("listEle", listEle);

  var maSinhVien, ten, email, matKhau, toan, ly, hoa, ngaySinh, khoaHoc;

  var sv = {};

  listEle.forEach(function (ele) {
    // Sử dụng id để nhận diện giá trị là của input, hay select nào.
    var thuocTinh = ele.id;
    sv[thuocTinh] = ele.value;
  });

  console.log("sv", sv);
  // Gõ đúng thứ tự tham số truyền vào để tránh nhầm thuộc tính.
  var sinhVien = new SinhVien(
    sv.msv,
    sv.email,
    sv.tsv,
    sv.khoaHoc,
    sv.ngaySinh,
    sv.toan,
    sv.ly,
    sv.hoa,
    sv.matKhau
  );
  // Kiểm tra xem thử tạo đúng giá trị hay chưa.
  console.log("sinhVien", sinhVien);
  // lưu vào danhSachSinhVien
  dssv.themSinhVien(sinhVien);

  // luu vào localStorage
  luuDanhSachSinhVienLocal();

  // reset form
  eleForm.reset();

  // render table
  renderTable();
};
// == Reload page ==
/**
 * Chạy mỗi khi reload page
 * 1. Lấy dssv từ local ra
 * 2. Gán lại giá trị thuộc tính danhSachSinhVien của đối tượng dssv
 * 3. render table
 */
function init() {
  // 1.
  var danhSanhSinhVien = layDanhSachSinhVienLocal();
  // 2.
  dssv.danhSachSinhVien = danhSanhSinhVien;
  // 3.
  renderTable();
}
// Chạy function
init();

// == Render Table ==

/* <tr>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td>
<td>@mdo</td>
<td>@mdo</td>
<td>@mdo</td>
<td>
    <button class="btn btn-warning">Sửa</button>
    <button class="btn btn-danger">Xóa</button>
</td>
</tr> */

function renderTable() {
  var eleHtml = ``;

  // Lặp qua mảng sinh viên để tạo mỗi sinh viên là mỗi thẻ tr
  // và cộng dồn nó vào eleHtml
  // (1)danhSachSinhVien: đối tượng
  // (2)danhSachSinhVien: thuộc tính.
  console.log("danhSachSinhVien", dssv);

  // f2 đổi tên toàn bộ biến.
  dssv.danhSachSinhVien.forEach(function (sv) {
    // Chúng ta không thể truyền trực tiếp giá trị object sv vào function inline được.
    eleHtml += `
        <tr>
          <td>${sv.maSinhVien}</td>
          <td>${sv.ten}</td>
          <td>${sv.ngay}</td>
          <td>${sv.email}</td>
          <td>${sv.khoaHoc}</td>
          <td>${tinhDiemTrungBinh(sv)}</td>
          <td>
              <button onclick="chinhSuaSinhVien('${
                sv.maSinhVien
              }')" class="btn btn-warning">Sửa</button>
              <button onclick="xoaSinhVien('${
                sv.maSinhVien
              }')" class="btn btn-danger">Xóa</button>
          </td>
        </tr>
      `;
  });

  var tbody = document.querySelector(".table-sinh-vien tbody");

  tbody.innerHTML = eleHtml;
}
// == Xóa Sinh Viên ==
function xoaSinhVien(msv) {
  console.log(msv);
  dssv.xoaSinhVien(msv);

  // render lại table
  renderTable();
  // cập nhật lại storage
  luuDanhSachSinhVienLocal();
}
// == Chỉnh Sửa Sinh Viên ==
/**
 * 1. Render ngược dữ liệu lên form
 * 2. Disabled input mã sinh viên
 * 3. Chuyển thêm sinh viên -> cập nhật sinh viên
 */
function chinhSuaSinhVien(msv) {
  var sinhVien = dssv.timKiemSinhVienTheoMsv(msv);

  renderDuLieuLenForm(sinhVien);
}

function renderDuLieuLenForm(sv) {
  var listEle = document.querySelectorAll(
    ".form-sinh-vien input:not([disabled]),.form-sinh-vien select"
  );

  var mapper = {
    msv: "maSinhVien",
    tsv: "ten",
    email: "email",
    khoaHoc: "khoaHoc",
    ngaySinh: "ngay",
    toan: "diemToan",
    ly: "diemLy",
    hoa: "diemHoa",
    matKhau: "matKhau",
  };

  /**
   * Dùng id để phân biệt được input nào cần lấy dữ liệu thuộc tính nào của đối tượng sv để render lên trên giao diện.
   */
  listEle.forEach(function (ele) {
    var thuocTinh = mapper[ele.id];
    // if (ele.id === "msv") {
    //   // ele.value = sv["maSinhVien"];

    //   thuocTinh = "maSinhVien";
    //   // thuocTinh = mapper[ele.id];
    // }

    // if (ele.id === "tsv") {
    //   // ele.value = sv["ten"];
    //   thuocTinh = "ten";
    //   // thuocTinh = mapper[ele.id];
    // }

    // if (ele.id === "email") {
    //   // ele.value = sv["email"];
    //   thuocTinh = "email";
    // }

    ele.value = sv[thuocTinh];
  });
}

// == Fix tạm bug khi lưu vào local sẽ bị mất method tinhDiemTrungBinh ==
function tinhDiemTrungBinh(sv) {
  const dtb = (sv.diemHoa + sv.diemLy + sv.diemToan) / 3;
  return dtb.toFixed(2);
}

// ==
function luuDanhSachSinhVienLocal() {
  localStorage.setItem("dssv", JSON.stringify(dssv.danhSachSinhVien));
}

function layDanhSachSinhVienLocal() {
  var res = localStorage.getItem("dssv");

  // Kiểm tra xem thử localStorage có chứa dữ liệu của key: dssv hay không.
  if (res) {
    return JSON.parse(res);
  }

  return [];
}

// == LocalStorage ==
/**
 * Lưu trữ data tại browser
 * Khi reload trang không bị mất dữ liệu.
 */
var age = 20;
var sv = {
  name: "Nguyen Van Teo",
  age: 20,
};
// JSON.stringify(age): chuyển dữ liệu của chúng ta về định dạng JSON
// Định dạng JSON là một chuỗi(String).
// JSON.parse(json): chuyển định dạng JSON về kiểu dữ liệu của chúng ta

// 1. Lưu (set)
// localStorage.setItem("sinhVien", JSON.stringify(sv));
// localStorage.setItem("tuoi", JSON.stringify(age));
// localStorage.setItem("ten", JSON.stringify("Nguyen Van A"));

// 2. Lấy (get)
// console.log("tuoi", JSON.parse(localStorage.getItem("tuoi"))); // Kiểu dữ liệu chúng ta sẽ nhận được là kiểu gì? String -> ở định dạng json
// console.log("ten", JSON.parse(localStorage.getItem("ten")));
// console.log("sinhVien", JSON.parse(localStorage.getItem("sinhVien")));

/**
 * "20"
 * "[1,2,3,4]"
 * "{"a":10,"b":20}"
 */

// ======================
var obj = {};
//-- kiểm tra nếu obj không có thuộc tính a, thì nó sẽ tạo ra thuộc tính đó và gán giá trị
//-- Nếu có thì nó sẽ ghi đè giá trị, gán lại giá trị.
//-- obj.a = 20;
var age = "number";
obj[age] = 20;

// console.log(obj);
// ======================
