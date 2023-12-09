# Ôn tập
1. 
```js
var a = 10;
var b = a;
console.log(a === b); // true ? false
```

2.
```js
var a = 10;
var b = 10;
console.log(a === b); // true ? false
```

3.
```js
var a = {};
var b = a;
console.log(a === b); // true ? false
```

4.
```js
var a = {};
var b = {};
console.log(a === b); // true ? false
```

5.
```js
var a = { c: 1 };
var b = { c: 1 };
console.log(a === b); // true ? false
```

6.

```js
var a = [];
var b = a;
console.log(a === b); // true ? false
```

7.
```js
var a = [];
var b = [];
console.log(a === b); // true ? false
```

8.
```js
console.log("" == 0); // true ? false
console.log(" " == 0); // true ? false
console.log("cyber" == 0); // true ? false
console.log(false == 0); // true ? false
console.log(false == "0"); // true ? false
console.log(Boolean("cyber")); // true ? false
console.log(Boolean("")); // true ? false
console.log(Boolean(" ")); // true ? false
console.log(Boolean("0")); // true ? false
console.log(Boolean(0)); // true ? false
```

9.
```js
var a = 10;
function print() {
  var a = 20;
}
console.log(a); // ?
```

10.
```js
var a = 10;
function print() {
  a = 20;
}
console.log(a); // ?
```

11.
```js
var a = 10;
if (3 < 5) {
  var a = 20;
}
console.log(a); // ?
```

12.
```js
var a = 10;
if (3 < 5) {
  a = 20;
}
console.log(a); // ?
```

13.
```js
var a = undefined;
console.log(a || "cyber"); // ?
a = "undefined";
console.log(a || "cyber"); // ?
a = "Javascript";
console.log(a || "cyber"); // ?
```

14.
```js
console.log("" && 0);
console.log(" " && 0);
console.log("cyber" && 0);
console.log("cyber" && 1);
console.log("cyber" && "Javascript");
```

15.
```js
console.log("" || false);
console.log("" || 0);
console.log(0 || "");
console.log(0 || "Cyber");
```

16.
```js
const obj = {
  a: 10,
};
console.log(obj.a); // ?
console.log(obj.b); // ?
obj.b = 20; // errors ? yes | no
console.log(obj.b); // ?
```

17.
```js
const stu_1 = {
  age: 20,
  name: "Nguyen Van A",
};
const stu_2 = stu_1;

console.log(stu_1); // ?
console.log(stu_2); // ?
console.log(stu_1 === stu_2); // ?

stu_1.age = 30;

console.log(stu_1); // ?
console.log(stu_2); // ?
console.log(stu_1 === stu_2); // ?
```

18.
```js
var a = 10;

function scope_1() {
  console.log(a); // ?

  function scope_2() {
    var a = 20;
    console.log(a); // ?
  }

  scope_2();
  scope_3();
}

function scope_3() {
  console.log(a); // ?
}

scope_1();
```

19.
```js
function count() {
  var c = 0;
  return () => {
    c++;

    return c;
  };
}

var inc = count();
console.log(inc()); // ?
console.log(inc()); // ?
console.log(inc()); // ?

console.log(count()()); // error ? yes | no
```

20.
```js
function Animal(name) {
  this.name = name;

  this.print = function () {
    console.log(this); // 1> ? || 2>?
    console.log(this.name); // 1> ? || 2>?

    function a() {
      console.log(this); // 1> ? || 2> ?
    }
    a();
  };
}

var dog = new Animal("dog"); // 1>
var cat = new Animal("cat"); // 2>
dog.print();
cat.print();
```