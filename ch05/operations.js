if (username === null) {
  username = 'John Doe';
}

if (!username) username = 'John Doe'; // то же самое, Если имя пользователя = Null, undefined, false, 0, "", NaN.

if (username) {
  username = 'Jony';
} // только если username не равно !== Null или undefined;

let n = 4;

switch (n) {
  case 6:
    console.log(n);
    break;
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
}// from 0 to 9
