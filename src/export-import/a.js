// file sẽ tạo function để xử lý các tác vụ nhỏ

/**
 * export: để chia sẻ cho các file js khác sử dụng
 * có 2 loại export:
 * 1. name
 * 2. default
 */
//-- Cách 1: name: điền trực tiếp
export function calcSum(a, b) {
  return a + b;
}
//-- Cách 2: name: điền ở dưới cùng của file
// function calcSum(a, b) {
//   return a + b;
// }
// export { calcSum };
