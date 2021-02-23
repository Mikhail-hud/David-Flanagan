// Convert [x,y] coordinates to [r,theta] polar coordinates
function toPolar(x, y) {
  return [Math.sqrt(x * x + y * y), Math.atan2(y, x)];
}

// Convert polar to Cartesian coordinates
function toCartesian(r, theta) {
  return [r * Math.cos(theta), r * Math.sin(theta)];
}

let [r, theta] = toPolar(1.0, 1.0); // r == Math.sqrt(2); theta == Math.PI/4
let [x, y] = toCartesian(r, theta); // [x, y] == [1.0, 1,0]

let [x, y] = [2, 3]; //  то же, что let x = 2, let y = 3
let [x, y] = [x + 1, y + 1]; // x = x + 1 , y = y + 1
[x, y] = [y, x]; // поменять местами

let [x, y] = [1]; // x = 1 , y = undefined
let [x, y] = [1, 2, 3]; // x = 1 , y = 3;
let [, x, , y] = [1, 2, 3, 4]; // x = 2 , y = 4;

let [x, ...y] = [1, 2, 3, 4]; // x = 1, y = [2,3,4]

let [a, [b, c]] = [1, [2, 3], 4]; // a = 1,  b = 2, c = 3.

let [first, ...rest] = 'Hello'; // first = "H", rest = ["e", "l", "l", "o"]

let points = [
  { x: 1, y: 2 },
  { x: 3, y: 4 },
];

let [{ x: x1, y: y1 }, { x: x2, y: y2 }] = points;

console.log(x1 === 1 && y1 === 2 && x2 === 3 && y2 === 4); /// true

const object = {
  names: { first: 'Alice', last: 'Smith' },
};

const firstName = object?.names?.first ?? '(no first name)';
// → 'Alice'

const middleName = object?.names?.middle ?? '(no middle name)';
// → '(no middle name)'

function square(x, fun) {
  if (fun) {
    fun(x);
  }
  return (x *= x);
}
function square(x, fun) {
  fun?.(x);
  return (x *= 10);
}

square(4, console.log); // 4, 40

//Operation in return true or false

let point = {
  x: '1',
  y: '1',
};

'x' in point; // true, обьект имеет совйство по имени "x"
'z' in point; // false, обькт не имеет свойство  "z"

let data = [7, 8, 9];
2 in data; // true, число преобразуеться в строку
'0' in data; // true, масив иммет елемент с индексом ноль
'3' in data; //false, масив не иммет елемент с индексом 3

if (a === b) stop(); //вызов stop только если a равно b
a === b && stop(); // то же самое

let greating = 'Hello';
if (username) {
  greating += username;
} else {
  greating += 'there';
}
greating = 'hello' + (username ? username : 'there'); // то же самое

let maxWidth = width ?? PerformanceWidth ?? 500 // если Width определено использовать его, если нет, - искать в обьекте PerformanceWidth, в противно слечае 500.

let options = {
  timeout: 0,
  title: '',
  verbose: false,
  n: null,
};

options.timeout ?? 1000; // 0
options.title ?? 'Untiteled'; // ""
options.verbose ?? true; // false
options.quite ?? false; // false
options.n ?? 10; // 10

