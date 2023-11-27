var eleForm = document.querySelector("form");

eleForm.onsubmit = function (event) {
  // ngăn chặn reload lại trang, hành vi mặc định của thẻ form
  event.preventDefault();
};

// document.querySelector(".tsv").onclick = function themSinhVien(event) {
//   // function themSinhVien sẽ chạy khi click vào button thêm sinh viên

//   // event: sẽ được truyền khi button click gọi hàm themSinhVien
//   console.log("hihi", event);
// };

/**
 * Vì sao phải thêm element form vào.
 * - Tăng trải nghiệm người dùng, nhập xong nhấn enter sẽ submit dữ liệu không cần click vào button.
 * - Tổng hợp lại tất cả các giá trị của input, select nằm bên trong element form.
 *
 *
 * - Reload lại trang khi submit.
 */
