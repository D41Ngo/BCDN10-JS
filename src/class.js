// == [ES5] ==
// Cách tạo lớp đối tượng
function Student(name, age) {
  this.name = name;
  this.age = age;

  //   this.printInfo = () => {
  //     console.log("Name is ", this.name);
  //   };
}
// Cách mà chúng ta chia sẻ method giữa các đối tượng khác nhau, mà cùng 1 địa chỉ method.
// Không sử dụng arrow function: arrow function nó sẽ không có ngữ cảnh this riêng.
Student.prototype.printInfo = function () {
  console.log("Name is ", this.name);
};

const student1 = new Student("Nguyen Van A", 20);
const student2 = new Student("Nguyen Van B", 22);

student1.printInfo();
student2.printInfo();
console.log(student1.printInfo === student2.printInfo); // true
console.log(student1);
// hasOwnProperty: method này ở đâu ra ???? Do nó được kế thừa từ Object
console.log(student1.hasOwnProperty("addr"));
// ✅ prototype chain.
// == [ES6] ==: class
class Product {
  // hàm khởi tạo đối tượng.
  // Khởi tạo các thuộc tính của đối tượng.
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  // Tạo method
  // Cách 1: truyền thống.
  showInfo() {
    console.log("Name is ", this.name);
    console.log("Price is ", this.price);
  }
  // Cách 2:
}

const prod1 = new Product("Iphone 15", 1000); // Gọi và truyền tham số cho hàm constructor
const prod2 = new Product("Iphone 16", 2000);
prod1.showInfo();
prod2.showInfo();

console.log(prod1.showInfo === prod2.showInfo); // true

console.log({
  prod1,
  prod2,
});

// -- Extend --
/**
 * con cái sẽ được kế thừa gen của ba mẹ.
 */

// Lớp đối tương cha.
class ChuyenXe {
  constructor(soXe, hoTenTaiXe, maSoChuyen, doanhThu) {
    this.soXe = soXe;
    this.hoTenTaiXe = hoTenTaiXe;
    this.maSoChuyen = maSoChuyen;
    this.doanhThu = doanhThu;
  }

  run() {
    console.log("ChuyenXe đang chạy.");
  }
}

class ChuyenXeNoiThanh extends ChuyenXe {
  constructor(soTuyen, soKmDiDuoc, soXe, hoTenTaiXe, maSoChuyen, doanhThu) {
    // Phải gọi hàm super trước khi sử dụng this để truy cập các giá trị thuộc tính, gán giá trị.
    // super: chính là lớp cha (ChuyenXe).
    // super(): gọi hàm khởi tạo của lớp đối tượng kế thừa
    super(soXe, hoTenTaiXe, maSoChuyen, doanhThu); // ChuyenXe()

    this.soTuyen = soTuyen;
    this.soKmDiDuoc = soKmDiDuoc;
  }

  run() {
    // mong muốn gọi method run của cha;
    super.run();

    console.log("ChuyenXeNoiThanh đang chạy.");
  }
}

class ChuyenXeNgoaiThanh extends ChuyenXe {
  // Chú ý thứ tự giá trị truyền vào.
  // rest parameters
  constructor(noiDen, soNgayDiDuoc, ...rest) {
    // rest: Array
    // sử dụng spread operator để rải các giá trị nhận được cho lớp cha.
    super(...rest);

    this.noiDen = noiDen;
    this.soNgayDiDuoc = soNgayDiDuoc;
  }

  run() {
    console.log("ChuyenXeNgoaiThanh đang chạy.");
  }
}
// soXe, hoTenTaiXe, maSoChuyen, doanhThu
const ngoaiThanh = new ChuyenXeNgoaiThanh(
  "Sai Gon",
  "10",
  "123456",
  "Nguyen Van A",
  "111",
  "1_000_000"
);
const cxnt = new ChuyenXeNoiThanh(
  "QN-DN",
  "100Km",
  "123456",
  "Nguyen Van A",
  "111",
  "1_000_000"
);
cxnt.run();
ngoaiThanh.run();
