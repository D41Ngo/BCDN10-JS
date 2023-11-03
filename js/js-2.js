// Lấy element trên (DOM) file HTML.
var inputNumber = document.getElementById("input-number");

console.log(inputNumber.value); // "": string rỗng.

// bài toán: click button - click me thì show ra giá trị của ô input
// Tạo function: xử lý một vấn đề gì đó.

/**
 * function tenHam(thamSo1, thamSo2){
 *   // những xử lý
 *   // của chúng ta
 * }
 */

// Khai báo function, hàm
function handleClick() {
  console.log("tren");
  // code trong này
  //   alert("hihi");
  var result = inputNumber.value;

  // kiểm tra kiểu dữ liệu của result
  // typeof: lấy kiểu dữ liệu của biến.
  console.log(typeof result);
}

// Mọi giá trị các bạn lấy từ trên giao diện luôn có kiểu dữ liệu là [= String =].

// -----------------------------
// Thực thi function, gọi hàm
console.log("1");
function printHello() {
  console.log("2");
  // sau khi hàm chạy xong.
  // Nếu đang thực thi function nào thì phải thực thi xong rồi mới thoát ra.
}
// Thực thi. gọi hàm
console.log("3");
printHello();
console.log("4");
// ----------------------------
// thuộc tích onclick của thẻ button: nhận vào là một function.
document.getElementById("btn").onclick = function () {
  console.log("duoi");
};

// ----------------
/**
 <button id="btn" onclick="handleClick()">Click Me</button>
 */

document.getElementById("btn").onclick = function () {
  handleClick();
};

// document.getElementById("btn").onclick = handleClick(); (❌)
// -----------------------
/*
 * Nếu muốn gán sự kiện thì chúng ta nên gán ở file js
 * - UI, Logic
 * --------------------------
 * - UI: html
 * - logic: js
 */
