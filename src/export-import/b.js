// Import - Export: giúp chúng ta xác định được nơi mà chúng ta sử dụng function hay biến.
// 2. Chỉ import 1 file js duy nhất vào file html

// Muốn sử dụng những thứ được export dưới dạng name ở file a.js
// { } : import dưới dạng name
import { calcSum } from "./a.js";
// Import dưới dạng default thì không cần dấu { }
// 2. Có thể đổi qua một tên khác.
// --
// Có thể import default và name trên cùng 1 hàng.
// Để đổi tên của export name thì chúng ta thêm as phía sau biến hay function cần đổi tên và đưa tên chúng ta muốn đổi vào.
// ❌ Nếu đã đổi tên rồi thì không thể sử dụng tên đó được nữa
import PIfromDefault, { NAME as name } from "./export-default.js";

// file sẽ tương tác với giao diện.
document.getElementById("btn").onclick = () => {
  console.log({ PIfromDefault, name });

  const valueA = Number(document.getElementById("a").value);
  const valueB = +document.getElementById("b").value;
  const pKetQua = document.getElementById("kq");

  // calcSum: ảo thuật
  // calcSum: không biết ở file nào để có thể cập nhật hay chỉnh sửa.
  const total = calcSum(valueA, valueB);

  pKetQua.innerHTML = `Tổng 2 số là: ${total}`;
};
