/**
 * Instances of this Complex class represent complex numbers.
 * Recall that a complex number is the sum of a real number and an
 * imaginary number and that the imaginary number i is the square root of -1.
 */
class Complex {
  // Once class field declarations are standardized, we could declare
  // private fields to hold the real and imaginary parts of a complex number
  // here, with code like this:
  //
  // #r = 0;
  // #i = 0;

  // This constructor function defines the instance fields r and i on every
  // instance it creates. These fields hold the real and imaginary parts of
  // the complex number: they are the state of the object.
  constructor(real, imaginary) {
    this.r = real;       // This field holds the real part of the number.
    this.i = imaginary;  // This field holds the imaginary part.
  }

  // Here are two instance methods for addition and multiplication
  // of complex numbers. If c and d are instances of this class, we
  // might write c.plus(d) or d.times(c)
  plus(that) {
    return new Complex(this.r + that.r, this.i + that.i);
  }

  times(that) {
    return new Complex(this.r * that.r - this.i * that.i,
      this.r * that.i + this.i * that.r);
  }

  // And here are static variants of the complex arithmetic methods.
  // We could write Complex.sum(c,d) and Complex.product(c,d)
  static sum(c, d) {
    return c.plus(d);
  }

  static product(c, d) {
    return c.times(d);
  }

  // These are some instance methods that are defined as getters
  // so they're used like fields. The real and imaginary getters would
  // be useful if we were using private fields this.#r and this.#i
  get real() {
    return this.r;
  }

  get imaginary() {
    return this.i;
  }

  get magnitude() {
    return Math.hypot(this.r, this.i);
  }

  // Classes should almost always have a toString() method
  toString() {
    return `{${this.r},${this.i}}`;
  }

  // It is often useful to define a method for testing whether
  // two instances of your class represent the same value
  equals(that) {
    return that instanceof Complex &&
      this.r === that.r &&
      this.i === that.i;
  }

  // Once static fields are supported inside class bodies, we could
  // define a useful Complex.ZERO constant like this:
  // static ZERO = new Complex(0,0);
}

// Here are some class fields that hold useful predefined complex numbers.
Complex.ZERO = new Complex(0, 0);
Complex.ONE = new Complex(1, 0);
Complex.I = new Complex(0, 1);


// Es 5
function Rang(from, to) {
  this.from = from
  this.to = to

}

Rang.prototype = {
  includes: function (x) {
    return this.from <= x && x <= this.to
  },
  toString: function () {
    return "(" + this.from + " " + this.to + ")"
  },
  [Symbol.iterator]: function* () {
    for (let x = Math.ceil(this.from); x <= this.to; x++) yield  x;
  }
}

let r = new Rang(1,3) // => {from: 1, to: 3}

r.includes(2) // => true;
r.toString() // => (1 3);
let test = [...r] // [1, 2, 3]

class Animal {
  static type = 'Animal' // доступно только у класса Animal.type => "Animal"

  constructor(options) {
    this.name = options.name
    this.age = options.age
    this.hasTail = options.hasTail
  }

  voice() {
    console.log(`Hello, i am ${this.name}`)
  }
}

// console.log(typeof(Animal)) // Function
// console.log(typeof(Animal.prototype)) // Object
// console.log(Animal.prototype) //
/*{constructor: ƒ, voice: ƒ}
constructor: class Animal
voice: ƒ voice()
///-------------------///
В JavaScript функция может использоваться как конструктор.
Это означает, что мы можем создавать из них объекты, используя ключевое слово new.
Каждая функция-конструктор имеет встроенный объект, связанный с ними. Этот встроенный объект называется прототипом.
Экземпляры функции-конструктора используют __proto__ для доступа к свойству прототипа своей функции-конструктора/класса.

JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства.
Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее.
Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

Точнее, свойства и методы определяются в свойстве prototype функции-конструктора объектов, а не в самих объектах
__proto__:
  constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()*/

const animal = new Animal({name: 'Cat', age: 5, hasTail: true})

console.log(animal.__proto__ === Animal.prototype); // true

class Cat extends Animal {
  static type = 'Cat'

  constructor(options) {
    super(options);
    this.color = options.color
  }

  voice() {
    super.voice(); // Hello, i am Cat
    console.log('Hello, i have lost voice'); // Hello, i have lost voice
  }

  get ageInfo() {
    return this.age * 5
  } // cat.ageInfo => 10

  set ageInfo(newAge) {
    return this.age = newAge
  }//  cat.ageInfo = 8 => 8
}

const cat = new Cat({name: "Cat", age: '2', hasTail: true, color: 'black'})


let data = {
  name: 'misha',
  age: 25,
  getData() {
    return `Hello, my name is ${this.name} and i am ${this.age} years old `
  }
}

let copy = Object.create(data) // создаёт новый объект из указанного объекта-прототипа.

copy.getData = function () {
  return 'Copy'
}
console.log(copy.getData()) // Copy
console.log(data.getData()); //  Hello, my name is misha and i am 25 years old

Object.prototype.hello = function () {
  alert("Hello")
}

copy.hello() // Alert with text 'Hello'