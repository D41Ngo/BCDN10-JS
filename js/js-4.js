/**
 *
 */

var x = 10;
var y = 20;

console.log("x = ", x);
console.log("y = ", y);
console.log("x > y: ", x > y); // sai | false
console.log("x < y: ", x < y); // đúng | true
console.log("x == y: ", x == y); // sai | false
console.log("x != y: ", x != y); // đúng | true

// Thuần JS: so sánh 3 dấu bằng
console.log("x === y: ", x === y); // sai | false
console.log("x !== y: ", x !== y); // đúng | true
// ==========================
/**
 * == : nếu như so sánh 2 kiểu dữ liệu khác nhau, thì nó sẽ ép về cùng kiểu dữ liệu rồi mới bắt đầu so sánh.
 *
 * === : khác kiểu dữ liệu là false ngay lập tức.
 */

var num = "10";
console.log(typeof number); // string
// chuyển biến num về kiểu Number
// Cách ép kiểu dữ liệu.
num = Number(num); // chuyển kiểu String của biến num về kiểu Number
num = String(num); // chuyển kiểu Number của biến num về kiểu String
num = Boolean(num); // chuyển kiểu String của biến num về kiểu Boolean

console.log(typeof number); // number
// ==================================
console.log(true == 2);
/**
 * Các bước trình duyệt thực thi code:
 *
 * Boolean(true) == Boolean(2)
 * true == true
 */

console.log("hihi" == 2);
// ==================================
console.log("true === 2", true === 2);
// * Chú Ý: nên sử dụng ===, không nên sử dụng ==.
// * == sinh ra nhiều ngoại lệ, không nên sử dụng.
// * === tối ưu về hiệu suất của chương trình.

// ----------------------
// Nếu trời mưa thì mình sẽ ở nhà, ngược lại thì mình sẽ đi chơi

var isTroiMua = true;
/**
 * dieuKien: - phải kiểu dữ liệu => Boolean.
 *           - Nếu truyền sai kiểu dữ liệu thì nó sẽ ép lên kiểu Boolean.
 *
 * if(dieuKien){
 *    [code thực thi]
 * } else {
 * }
 *
 * nếu điều kiện: có giá trị là true, thì sẽ thực thi đoạn code bên trong dấu ngoặc nhọn trong if.
 * nếu điều kiện: có giá trị là false, thì nó sẽ thực thi đoạn code bên trong dấu ngoặc nhọn else.
 */
var diemSo = 6;

//  ????????
// Boolean(9)
if (9) {
  console.log("Mình sẽ ở nhà.");
} else {
  console.log("Mình sẽ đi chơi.");
}

// ---------------------------------
// Đối với chuỗi thì nó sẽ so sánh giá trị của từng ký tự một với nhau, dựa vào bảng mã ASCII
var str1 = "abc";
var str2 = "aef";

console.log(str1 > str2); // true | false
// ---------------------------------
/**
 * ! : phủ định.
 * && : và, mọi điều kiện phải là true thì mới có kết quả là true.
 * || : hoặc, chỉ cần một điều kiện đúng thì có kết quả là true.
 */

true && true; // true
true && false; // false
false && false; // false
false && true; // false

// --------------
true || false; // true
false || 5 > 3; // true
3 > 5 || false; // false
// ================================
/**
 * Chú thích:
 * - '&' là phép so sánh bit (0, 1).
 * - '&&' là toán tử điều kiện.
 */

// --------------------------
// Tìm trị tuyệt đối của một số nguyên.
// vd: -9, |-9| = 9,
// 3, |3| = 3
var input = -9;
var output; // kq: 9

// Math.abs(-9); // 9;

if (input < 0) {
  output = -input;
} else {
  output = input;
}

// --------------------------
//BT2: Nhập vào một số nguyên, cho biết số đó là chẵn hay lẻ, in lên màn hình.

// Bước 1:Gán thuộc tính onclick cho thẻ button
document.getElementById("btn-2").onclick = function () {
  // Bước 2: Lấy giá trị người dùng nhập vào.
  // document.getElementById("inp"): lấy element
  // document.getElementById("inp").value : lấy giá trị của element
  // Number(document.getElementById("inp").value): ép kiểu từ String -> Number
  var input = Number(document.getElementById("inp").value);

  // Bước 3: input % 2 == 0 -> chẵn
  var tagKq = document.getElementById("kq");
  if (input % 2 == 0) {
    tagKq.innerHTML = "Kết quả: Chẵn";
  } else {
    tagKq.innerHTML = "Kết quả: Lẻ";
  }
};

// =========================
// BT3:
/**
 * vd:
 *  8 >= dtb <= 10: Giỏi
 *  5 =< dtb < 8: Khá
 *  dtb < 5: Trung Bình
 */
document.getElementById("btn-3").onclick = function () {
  console.log("btn-3");
  /**
   * lấy thẻ input và lấy giá trị của nó
   */
  var input = Number(document.getElementById("dtb").value);

  // Cách 1: Lồng nhau
  if (input < 0 || input > 10) {
    alert("Nhập lại giá trị");
  } else {
    if (8 <= input && input <= 10) {
      console.log("Giỏi");
    } else {
      if (input >= 5 && input < 8) {
        console.log("Khá");
      } else {
        console.log("Trung Bình");
      }
    }
  }

  // Cách 2: Nối nhau
  var kq;
  if (input < 0 || input > 10) {
    alert("Nhập lại giá trị");
    kq = null;
  } else if (8 <= input && input <= 10) {
    console.log("Giỏi");
    kq = "gioi";
  } else if (input >= 5 && input < 8) {
    console.log("Khá");
    kq = "kha";
  } else {
    console.log("Trung Bình");
    kq = "tb";
  }

  kq =
    input < 0 || input > 10
      ? null
      : 8 <= input && input <= 10
      ? "gioi"
      : input >= 5 && input < 8
      ? "kha"
      : "tb";
};
// ---------------------
// Cách 1: if else, lồng nhau
if (3 > 5) {
  // Đúng dk1;
} else {
  // Sai dk1;
  if (3 > 4) {
    // Đúng dk2;
  } else {
    // Sai dk2;
  }
}
// Cách 2: if else nối nhau
if (3 > 5) {
  // Đúng dk1;
} else if (3 > 4) {
  // Đúng dk2;
} else {
  // Sai cả 2 dk trên
}

// -------------------
/**
 * Toán tử 3 ngôi:
 * [dk] ? [dk đúng lấy giá trị này] : [dk sai]
 */

var kq = 3 % 2 === 0 ? "chan" : "le";
/*
  var kq;
  if (3 % 2) {
    kq = "chan";
  } else {
    kq = "le";
  }
*/

// ---------------------
var input = "on";
var out; // input là 'on' thì gán out = 'bat' ngược lại 'tat'
// C2;
out = input === "on" ? "bat" : "tat";
// ============
// C1;
if (input === "on") {
  out = "bat";
} else {
  out = "tat";
}
// ---------------

var thang = 2;

if (thang === 1) {
  console.log("thang 1");
} else if (thang === 2) {
  console.log("thang 2");
} else if (thang === 3) {
  console.log("thang 3");
} else if (thang === 4) {
  console.log("thang 4");
} else if (thang === 5) {
  console.log("thang 5");
} else if (thang === 6) {
  console.log("thang 6");
} else if (thang === 7) {
  console.log("thang 7");
} else if (thang === 8) {
  console.log("thang 8");
} else if (thang === 9) {
  console.log("thang 9");
} else if (thang === 10) {
  console.log("thang 10");
} else if (thang === 11) {
  console.log("thang 11");
} else if (thang === 12) {
  console.log("thang 12");
} else {
  console.log("Tháng không hợp lệ");
}

thang = 1;
// switch case: so sánh bằng;
// Nhớ có break ở cuối mỗi case;
switch (thang) {
  case 1:
    console.log("thang 1");
    break; // dừng việc kiểm tra những case khác
  case 2:
    console.log("Thang 2");
    break;
  case 3:
    console.log("Thang 3");
    break;
  case 4:
    console.log("Thang 4");
    break;
  case 5:
    console.log("Thang 5");
    break;
  case 6:
    console.log("Thang 6");
    break;
  case 7:
    console.log("Thang 7");
    break;
  case 8:
    console.log("Thang 8");
    break;
  case 9:
    console.log("Thang 9");
    break;
  case 10:
    console.log("Thang 10");
    break;
  case 11:
    console.log("Thang 11");
    break;
  case 12:
    console.log("Thang 12");
    break;
  default:
    // Không rơi vào 1 trong những trường hợp trên. thì vào th này.
    console.log("Tháng không hợp lệ");
}
// --------------------------
// BT4:
document.getElementById("btn-4").onclick = function () {
  var input = Number(document.getElementById("so").value);

  switch (input) {
    case 1:
      alert("Đây là số 1");
      break;
    case 2:
      alert("Trường hợp 2");
      break;
    case 3:
      alert("Còn đây là số 3");
      break;
    case 4:
      alert("Số 4");
      break;
    default:
      alert("Nhập lại đê, yêu cầu nhập từ 1 -> 4");
  }
};

//
3 < 5 && false; // true | false
true && false; // false

if (bieu_thuc_dieu_kien) {
  console.log("true");
}
