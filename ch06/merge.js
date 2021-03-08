// Like Object.assign() but doesn't override existing properties
// (and also doesn't handle Symbol properties)
function merge(target, ...sources) {
  for (let source of sources) {
    for (let key of Object.keys(source)) {
      if (!(key in target)) {
        // This is different than Object.assign()
        target[key] = source[key];
      }
    }
  }
  return target;
}
Object.assign({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 2, y: 3, z: 4}
merge({ x: 1 }, { x: 2, y: 2 }, { y: 3, z: 4 }); // => {x: 1, y: 2, z: 4}

book.edition = 7; // создание свойства обэкта book
book['main title'] = 'ECMAScript'; // изменение свойства

//Наследование

let unitcircle = { r: 1 };
let c = Object.create(unitcircle); // c наследует свойство r
c.x = 1;
c.y = 2;
c.r = 2;
unitcircle.r; // 1: прототип не затронут.

let o = { x: 1 };
'x' in o; // опертация in возвращает true если обьект имеет собственное или унаследованное свойство

o.hasOwnProperty('x'); //опертация  возвращает true если обьект имеет собственное свойство
Object.keys(o); //  возвращает масив имён перечислимых собственных свойст обьекта. Не влючает унаследованные свойства.
Object.getOwnPropertyNames(o); //  возвращает также  масив имён не перечислимых собственных свойст обьекта. ПРи условии, что имена предоставленные строками

//Разширение обьектов
let target = { x: 1 };
let source = { y: 2, z: 3 };
for (const key of Object.keys(source)) {
  target[key] = source[key];
}
target; // {x:1, y:2, z:3}

Object.assign(); // ожидает получения в своих аргументах двух и болие обьектов. Она модифицирует и возвращает первый аргумент, в котором указан целевой обьекты

//Операция распространения

let position = { x: 0, y: 0 };
let dimensions = { width: 100, height: 75 };

let rect = { ...position, ...dimensions };
rect.x + rect.y + rect.width + rect.height; // 175

let o = { x: 1 };
let p = { x: 0, ...o };
p.x; // 1 значение из обьекта O переопределяет начальное значение

let q = { ...o, x: 2 };
q.x; // 2 значение 2 переопеределяет предыдущиее значение из о

// Вычисляемые свойства
const PROPERTY_NAME = 'p1';
function computePropertyName() {
  return 'p' + 2;
}
let p = {
  [PROPERTY_NAME]: 1,
  [computePropertyName()]: 2,
};
p.p1 + p.p2; // 3

// сокращённая щапись методов

let square = {
  area() {
    return this.side;
  },
  side: 10,
};

square.area();
