//smile
console.log('\u{1F600}');
Math.pow(2, 53); // 9007199254740992, 2 в степени 53.
Math.round(0.6); //1, округляет до ближайшего целого.
Math.ceil(0.6); // 1, округляет в большую сторону до целого
Math.floor(1.6); // 1, округляет в меньшую сторону до целого
Math.abs(-5); // 5 абсолютная величина
Math.max(x, y, z); // возвращает наибольший аргумент
Math.min(x, y, z); // возвращает найменьший аргумент
Math.random(); // псевдослучайное число х, где 0 <= x < 1.0  (от 0 до 1(не включительно))
Math.sqrt(3); // квадратный корень из 3
Math.pow(3, 1 / 3); // кубический корень из 3
Math.trunc(3.9); // 3 преобразует в целое число отбрасывая дробную часть

let s = 'Hello, World';
s[0]; // 'H'
s[s.length - 1]; // 'd'
s.slice(1, 4); // ell
s.slice(-3); // rld
s.split(', '); //["Hello", "World"] разбивает по строке разделителя
s.indexOf('1'); // 2, позиция певой буквы l
s.indexOf('1', 3); // 3,  позиция первой буквы l начиная с 3-й позиции
s.startsWith('Hello'); // true
s.endsWith('rld'); // true
s.includes('ll'); // ture

'x'.padStart(3); // "  x" добавляет пробел слева до длины 3
'x'.padEnd(3); // "x  "добавляет пробел справа до длины 3
'x'.padStart(3, '*'); // "**x" добавляет * слева до длины 3
'x'.padEnd(3, '-'); // "x--"добавляет - справа до длины 3

if (0) {
  console.log('text'); // только если 0 !== null или undefined
}

if ((x === 0 && y === 0) || !(z === 0)) {
    // x и y равны 0  или  z не равно 0
}

