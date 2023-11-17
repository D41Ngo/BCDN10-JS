/**
 * Object: Đối tượng.
 *
 * Gom tất cả các thông tin vào một biến.
 */

var tuoi = 20;
var ten = "Nguyen Van A";
var diaChi = "Da Nang";
var soDt = "0123456789";
//.......

// Dùng ngoặc {} để khởi tạo một đối tượng.
/**
 * Chú Ý: Dùng dấu : để gán giá trị cho thuộc tính.
 * Kết thúc dòng bằng dấu phẩy (,) .
 */
var sinhVien1 = {
  // thuộc tính (property): giá trị
  tuoi: 20,
  ten: "Nguyen Van A",
  diaChi: "Da Nang",
  soDth: "0123456789",
};

// Để lấy giá trị của từng thuộc tính. Truy xuất.
// Cách 1: dùng dấu chấm .  doiTuong.tenThuocTinh
console.log("tuoi", sinhVien1.tuoi);
console.log("ten", sinhVien1.ten);
console.log("diaChi", sinhVien1.diaChi);
console.log("soDth", sinhVien1.soDth);

// Cách 2:  doiTuong['tenThuocTinh']
console.log("tuoi", sinhVien1["tuoi"]);
console.log("ten", sinhVien1["ten"]);
console.log("diaChi", sinhVien1["diaChi"]);
console.log("soDth", sinhVien1["soDth"]);
/**
 * Lý do có cách 2. Dùng để truy xuất đến tên thuộc tính có khoảng trống.
 */
var sinhVien2 = {
  tuoi: 20,
  ten: "Nguyen Van A",
  "dia chi": "Da Nang",
  "so dien thoai": "0123456789",
};

sinhVien2["dia chi"];
// sinhVien2.dia chi ❌

// ============================
/**
 * Phương thức (method): function
 * Tượng trưng cho những hành động của đối tượng.
 */

var sinhVien3 = {
  toan: 9,
  ly: 7,
  hoa: 8,
  ten: "Sinh Vien 3",
  tuoi: 20,
  // Phương thức : function
  tinhDiemTrungBinh: function () {
    // Làm sao để lấy giá trị của đối tượng bên trong này.
    /**
     * this: tượng trưng cho đối tượng
     *
     * Để truy xuất đến một thuộc tính của đối tượng thì chúng ta dùng từ khóa this.
     * this chính là sinhVien3;
     */

    // console.log("sinhVien3 toan:", sinhVien3.toan); ❌ không nên dùng.
    // console.log("this toan:", this.toan);
    // console.log("this:", this);

    var dtb = (this.toan + this.ly + this.hoa) / 3;

    console.log("Diem trung binh la:", dtb);
  },

  hienThiThongTin: function () {
    console.log("Ten: ", this.ten);
    console.log("Tuoi: ", this.tuoi);

    this.tinhDiemTrungBinh();
  },
};

console.log("global this", this); // Bên ngoài phạm vi global this = Đối tượng Window.

sinhVien3.tinhDiemTrungBinh();
sinhVien3.hienThiThongTin();

// ===========================

var thinh = {
  ten: "Thinh",
  tuoi: "20",
  an: function () {},
  hoc: function () {},
  ngu: function () {},
};

var cuong = {
  ten: "Cuong",
  tuoi: "21",
  an: function () {},
  hoc: function () {},
  ngu: function () {},
};

var dat = {
  ten: "Dat",
  tuoi: "22",
  an: function () {},
  hoc: function () {},
  ngu: function () {},
};

// lớp đối tượng: tổ chức cấu trúc một đối tượng.
// Dễ thay đổi và chỉnh sửa.
function HocVien(ten, tuoi) {
  this.ten = ten;
  this.tuoi = tuoi;

  this.an = function () {};
  this.hoc = function () {};
  this.ngu = function () {};
}

// Dùng từ khóa new LopDoiTuong() để tạo ra một đối tượng.
var phu = new HocVien("Phu", "23");
var dai = new HocVien("Dai", "24");

console.log("phu:", phu);
console.log("dai:", dai);
