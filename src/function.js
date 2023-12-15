/**
 * declare function: có cơ chế hoisting
 * arrow function: không có cơ chế hoisting
 */
print_1();

function print_1() {}

var print_2 = function () {};

// -- Arrow function --
const print_3 = () => {
  console.log("cyber");
};

print_3();

const total = (a, b) => {
  return a + b;
};
// -- Rút gọn --
// const total = (a, b) => a + b;

console.log(total(2, 3));

const number = (message = "Yêu cầu nhập vào số.") => message;

number(); //
number("cyber");

// ------
// rest params: không quan tâm người dùng truyền vào bao nhiêu tham số
const calc = (a, b, ...rest) => {
  console.log("a", a); // 1
  console.log("b", b); // 2
  console.log("rest", rest); // []

  let rs = 0;
  rest.forEach((num) => {
    rs += num;
  });

  return rs;
};

calc(1, 2);
