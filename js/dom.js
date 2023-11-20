/**
 * Lấy element bằng class, tagname
 */

// Ví dụ: các bạn muốn tất cả thẻ h1 có màu đỏ.

// 1. lấy được hết tất cả các thẻ h1. [h1,h1] ?? kiểu dữ liệu là gì. phải là array.
// 2. thay đổi màu. Duyệt qua từng phần tử và thay đổi màu.

//1. Dùng getElementsByTagName để lấy các phần tử h1 trên file html.
var listH1 = document.getElementsByTagName("h1");

console.log(listH1);
// Cach 1:
for (var i = 0; i < listH1.length; i++) {
  var h1Ele = listH1[i];

  h1Ele.style.color = "red";
}

// Cach 2: Không thể dùng cách này vì listH1 không phải là array.
// listH1.forEach(function (h1Ele) {
//   h1Ele.style.color = "red";
// });

// ==========================
// Đổi hết tất cả class alert-danger => alert-success

// 1. Lấy hết tất cả các element có class alert-danger? Array.
// 2. Duyệt qua từng phần tử và thay đổi tên class.

// 1. getElementsByClassName
var listAlertDanger = document.getElementsByClassName("alert-danger");
// Copy từ listAlertDanger để chúng ta luôn lấy ra phần tử đúng nhất.

var length = listAlertDanger.length;
for (var i = 0; i < length; i++) {
  var elementDanger = listAlertDanger[0]; // vì sao là số 0;

  // Thay đổi tên class.
  // Cách 1: Gán lại giá trị của class mà không giữ những tên class đã có sẵn.
  // Khi thay đổi elementDanger thì listAlertDanger cũng thay đổi theo
  // Khi elementDanger thay đổi thì listAlertDanger phải giữ nguyên.
  //   elementDanger.className = "alert alert-success";

  // Cách 2: dùng classList (Nên dùng)
  elementDanger.classList.remove("alert-danger");
  elementDanger.classList.add("alert-success");
}
// ------------------------------
/**
 * querySelector: Lấy 1 phần tử trùng khớp đầu tiên.
 * querySelectorAll: Lấy tất cả.
 */

var container = document.querySelector(".container");
container.style.backgroundColor = "green";

var listContainer = document.querySelectorAll(".container");
console.log(listContainer);

var length = listContainer.length;
for (var i = 0; i < length; i++) {
  var ele = listContainer[i];
  ele.style.backgroundColor = "green";
}

var h2Ele = document.querySelector("h2:nth-child(2)");

console.log(h2Ele);
h2Ele.style.backgroundColor = "green";
h2Ele.style.color = "white";
