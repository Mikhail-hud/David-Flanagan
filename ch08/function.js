const square = function (x) {
  return x * x
}
square(4) // 16

const sum = (x, y) => {
  return x + y
};
sum(10, 5) // 15

const sum1 = (x, y) => x + y;
sum1(10, 15); // 25

const sum3 = x => x + 25;
sum3(5); // 30

const f = x => {
  return {value: x}
}
f(5) // {value: 5} return object

const g = x => ({value: x})
g(5)// {value:5} return object

let filtered = [1, null, 3, 4].filter(x => x !== null) // [1,3,4]

let squares = [1, 2, 3, 4, 5].map(x => x * 2) //  [2, 4, 6, 8, 10]

// Вложенные функции

function test(a, b) {
  function f1(x) {
    return x + 2
  }

  return (f1(a) + f1(b))
}

test(2, 2) // 8

let o = {}
o.m = function (x) {
  return x + 1
};
o.m(5) // 6


const rectangle = (width, height = width * 2) => ({width, height})
rectangle(25); // {width: 25, height: 50}

function max(first, ...rest) {
  let maxValue = first
  for (let n of rest) {
    if (n > maxValue) {
      maxValue = n
    }
  }
  return maxValue
}

max(1, 2, 50, 150, 2500, 400);  // 2500

function max1(item) {
  let maxValue = 0;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > maxValue) maxValue = arguments[i]
  }
  return maxValue
}

max1(1, 2, 4, 50, 25)// 50 обьэкт arguments [1, 2, 4, 50, 25, callee: ƒ, Symbol(Symbol.iterator): ƒ] стоит избегать,
// заменить его ...args

function max2(...item) {
  let maxValue = 0;
  for (let i = 0; i < item.length; i++) {
    if (item[i] > maxValue) maxValue = item[i]
  }
  return maxValue
}

max2(55, 2, 4, 50, 25) //55

/// Деструктуризация аргументов
function add(x, y) {
  return [x[0] + y[0], x[1] + y[1]]
}

add([1, 2], [3, 5]) // [4,7]

function add2([x, y], [x1, y1]) {
  return [x + x1, y + y1]
}

add2([1, 2], [3, 5]) // [4,7]

function add3({w, z}, scalar) {
  return {x: w + scalar, y: z + scalar}
}

add3({w: 1, z: 2}, 4) // {x: 5, y: 6}

function add4({x: x1, y: y1}, {z: z1, w: w1}) {
  return {x: x1 + y1, y: z1 + w1}
}

add4({x: 1, y: 1}, {z: 2, w: 3}) // {x: 2, y: 5}

function unit(x) {
  return x * x
}

let s = unit
s(16) // 256
unit(16) // 256

let unit2 = {
  test: function (x) {
    return x * x
  }
}

unit2.test(16) // 256

let a = [x => x * x, 45]
a[0](5)// 25

// Замыкание

function makeCounter(initialValue) {
  return function (increase) {
    return initialValue += initialValue + increase;
  };
}

let counter1 = makeCounter(0);
let counter2 = makeCounter(0);

console.log(counter1(2)); // 2
console.log(counter1(2)); // 6

console.log(counter1(2)) // 14
console.log(counter2(2)); // 2


function counter(n) {
  return {
    count() {
      return n++
    },
    reset() {
      return n = 0
    }
  }
}

let c = counter(0);
let d = counter(0);
console.log(c.count()) // 0
console.log(c.count()) // 1
console.log(c.reset()) // 0
console.log(c.count()) // 0
console.log(c.count()) // 1

/// Функции высшего порядка ― это такие функции, которые принимают функцию в качестве аргумента и возвращают функцию в качестве вывода.

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);

const persons = [
  {name: 'Peter', age: 16},
  {name: 'Mark', age: 18},
  {name: 'John', age: 27},
  {name: 'Jane', age: 14},
  {name: 'Tony', age: 24},
];
const fullAge = persons.filter(person => person.age >= 18);

const arr = [5, 7, 1, 8, 4];
const sum = arr.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 10); // prints 35


const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

function mapForEach(arr, fn) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      fn(arr[i])
    );
  }
  return newArray;
}

const lenArray = mapForEach(strArray, function (item) {
  return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);