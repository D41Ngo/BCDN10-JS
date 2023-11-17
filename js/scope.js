/**
 * Phạm vi sử dụng của biến.
 * - Global: Khi biến khai báo global thì có thể sử dụng ở mọi nơi.
 * - Local: function.
 * - Block.
 */

/**
 * Biến global (toàn cục): khi khai báo ở bên ngoài.
 */

var number = 21; // global;

function print() {
  // Trong function này chúng ta có thể sử dụng biến number được hay không ? Có thể sử dụng được.
  console.log(number);

  var number2 = 52;
  /**
   * Biến local (cục bộ): chỉ sử dụng ở trong phạm vi của nó. Chính là function này.
   */

  console.log("number2", number2);
} // kết thúc phạm vi thì không sử dụng được biến number2.

// console.log("number2", number2); // ❌ error // window + .

/** print(); */

// ==================================
/**
 * Trước tiên là nó sẽ tìm kiếm biến trong phạm vi của nó, có hay không.
 * Có: thì nó sẽ lấy biến (giá trị) trong phạm vi của nó.
 * Không: thì nó mới ra ngoài phạm vi lớn hơn của nó để tìm kiếm giá trị.
 *
 * Nếu như ngoài phạm vi lớn nhất nó cũng không tìm thấy thì nó sẽ báo lỗi.
 */
var number3 = 21;

function print() {
  // Trong phạm vi local có khai báo trùng tên biến với phạm vị global.
  //   var number3 = 50;
  console.log(number3);
}

print();

// ================================
// var number4 = 1;

// function a() {
//   var number4 = 2;

//   function b() {
//     var number4 = 3;

//     console.log("local b:", number4);
//   }

//   b();

//   console.log("local a:", number4); // 2.
// }

// console.log("global:", number4); // 3.
// a();

// ======================
// closure: khi function được tạo ra nó sẽ nhớ nơi hay vị trí đã sinh ra nó. Để biết chính xác khi được gọi thì nó sẽ được sử dụng những biến nào.

var number4 = 1;

function a() {
  var number4 = 2;

  function b() {
    var number4 = 3;

    console.log("local b:", number4);

    c();
  }

  function c() {
    console.log("local c:", number4); // ??
    // 2
  }

  b();

  console.log("local a:", number4); // 2.
}

console.log("global:", number4); // 3.
a();

// ======================
