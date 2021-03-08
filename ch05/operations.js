if (username === null) {
  username = 'John Doe';
}

if (!username) username = 'John Doe'; // то же самое, Если имя пользователя = Null, undefined, false, 0, "", NaN.

if (username) {
  username = 'Jony';
} // только если username не равно !== Null или undefined;

let n = 4;
if (n === 1) {
  console.log(n);
} else if (n === 2) {
  console.log(n);
} else if (n === 3) {
  console.log(n);
} else if (n === 4) {
  console.log(4); // выполняеть если n === 4,
} else {
  console.log(n); // если не одна из условий не подошло, тогда выполняеться else;
}

for (let i = 0; i < data.length; i++) {
  if (!data[i]) continue; // оператор continue перзапускает цикл со следующей итерацией
  // не удаеться продолжить с неопределенными данными.
  total += data[i];
}

for (let i = 0; i < a.length; i++) {
  if (a[i] === target) break; // преждевременный выход из цикла.
}

switch (n) {
  case 6:
    console.log(n);
    break; // преривыет оператор switch и выход из него.
  case 7:
    console.log(n);
    break;
  default:
    console.log(n);
    break;
} // 4, проверка по строгому сравнению.

let count = 0;
while (count < 10) {
  console.log(count);
  count++;
} // from 0 to 9

let i;
let j;
let sum = 0;
for (i = 0, j = 10; i <= 10; i++, j--) {
  sum += i + j;
} // 110

function tail(o) {
  for (; o.next; o = o.mext) {
    return o;
  }
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;
for (const item of data) {
  sum += item;
} // 45  работатет с итерируемыми обьектами. По умолчанию обьекты не являються итерируемыми. С обыкновенными обьектами приводит к генерированию ошибки Type Error;

let o = {
  x: 1,
  y: 2,
  z: 3,
};

for (const item of o) {
  console.log(item); // Uncaught TypeError: o is not iterable
}

for (const item of Object.keys(o)) {
  console.log(item); // x,y,z для получения свойст обьекта
}

for (const item of Object.values(o)) {
  console.log(item); // 1,2,3 , проход по значениям
}

for (const [k, i] of Object.entries(o)) {
  console.log(k, i); // x 1, y 2, z 3;. для получения свойст и значения через деструктурирущие присваивание
}

let frequency = {};
for (const letter of 'mississippi') {
  if (frequency[letter]) {
    frequency[letter]++;
  } else {
    frequency[letter] = 1;
  }
} //  {m: 1, i: 4, s: 4, p: 2}

let m = new Map([[1, 'one']]);
for (const [k, i] of m) {
  console.log(k, i); // 1, one;
}

let text = 'Na na na na na na na na Batman!';
let wordSet = new Set(text.split(' '));
let uniqe = [];

for (const word of wordSet) {
  uniqe.push(word); // ["Na", "na", "Batman!"]
}

async function print(stream) {
  for await (let chunk of stream) {
    console.log(chunk); // асинхронный атератор
  }
}

let o = {
  x: 1,
  y: 2,
  z: 3,
};
for (const item in o) {
  console.log(o[item]); // 1,2,3. значение каждого свойства
}

throw // результатом вычисления оператора может быть значение любоого типа, можна указать число, строку..

try {
  // в нормальной ситуации этот код выполняеться от ночала до конца. Но может генерировать исключение либо напрямую с помощью оператора throw, либо коственно.
  
} catch (error) {
  // операторы в данном блоке выполняються, если и только если в блоке try было сгенерировано исключение
  
} finally {
  // операторы в данном блоке выполняються, независимо от того, что произошло в блоке try 

}
