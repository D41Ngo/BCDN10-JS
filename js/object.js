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

sinhVien3["tinhDiemTrungBinh"]();
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

/**
 * HocVien: lớp đối tượng.
 * phu, dai: instance của lớp đối tượng hay là object (đối tượng).
 */
var phu = new HocVien("Phu", "23");
var dai = new HocVien("Dai", "24");

console.log("phu:", phu);
console.log("dai:", dai);

// ===========================
/**
 * Đối tượng (Object) giúp chúng ta đưa hay tổ chức giá trị về đúng nơi của nó.
 * lớp đối tượng: tổ chức cấu trúc một đối tượng. Tượng trưng cho các đối tượng giống nhau về thuộc tính hay phương thức.
 */

var iphone = {
  name: "Iphone 15", // lấy giá trị
  camera: "12mb",
  rom: "128g",
  ram: "8g",

  chupAnh: function () {
    console.log("Tách tách tách ...");
  },
  quayVideo: function () {
    console.log("Đang quay video ...");
  },

  hienThiThong: function () {
    // this === đối tượng của chúng ta,
    // this chính là chủ sở hữu của function này.
    console.log("name: ", this.name);
    console.log("camera: ", this["camera"]);
  },
};
// Gọi method hienThiThong của đối tượng iphone
iphone.hienThiThong();

// var iphone = {
//   name: "Iphone 16", // lấy giá trị
//   camera: "14mb",
//   rom: "256g",
//   ram: "12g",

//   chupAnh: function () {
//     console.log("Tách tách tách ...");
//   },
//   quayVideo: function () {
//     console.log("Đang quay video ...");
//   },

//   hienThiThong: function () {
//     // this === đối tượng của chúng ta,
//     // this chính là chủ sở hữu của function này.
//     console.log("name: ", this.name);
//     console.log("camera: ", this["camera"]);
//   },
// };

function Iphone(name, camera, rom, ram) {
  // Tạo ra thuộc tính => this.tenThuocTinh
  this.name = name;
  this.camera = camera;
  this.rom = rom;
  this.ram = ram;

  this.chupAnh = function () {
    console.log("Tách tách tách ...");
  };
  this.quayVideo = function () {
    console.log("Đang quay video ...");
  };

  this.hienThiThongTin = function () {
    // console.log("name: ", iphone16.name); ❌
    // console.log("name: ", Iphone.name); ❌

    console.log(this); // Chính là đối tượng mà các bạn tạo ra từ lớp đối tượng này.
    // this là instance của lớp đối tượng.

    console.log("name: ", this.name);
    console.log("camera: ", this["camera"]);
  };
}

// Tạo đối tượng từ lớp đối tượng.
// Tạo đối tượng vừa gán giá trị mặc định cho thuộc tính của đối tượng đó.
var iphone16 = new Iphone("Iphone 16", "20mb", "256g", "10g");
var iphone17 = new Iphone("Iphone 17", "20mb", "256g", "10g");

iphone16.hienThiThongTin();
iphone17.hienThiThongTin();

// Ox111111111

// console.log("trước", iphone16); // Ox111111111
// Gán lại giá trị thuộc tính cho lớp đối tượng.
// iphone16.name = "Iphone 16"; // Ox111111111.name = 'Iphone 16'
// iphone16.camera = "20mb"; // Ox111111111.carema = "20mb"
// iphone16.rom = "256g";
// iphone16.ram = "10g";

// console.log("sau", iphone16); // 0x111111111
