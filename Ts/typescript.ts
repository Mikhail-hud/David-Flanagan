let isCompleated: boolean = false;
let decimal: number = 25;
let firstName: string = 'Mikhail';
let u: undefined = undefined;
let n: null = null;

const greetUser = (): void => {
    alert('Hello World')
}

let list: number [] = [1, 2, 3] // Array type
let list2: Array<number> = [1, 2, 3] // Generic type

// Tuple Type
// Multiple lines
let x: [string, number];
x = ['hello', 10]

// one line
let y: [string, number] = ['hello', 25] // x = [10, 'hello'] // error case

// Any type
// Any type for array
let z: [any, any] = ['hello', 25];
let l: Array<any> = ['hello', 45];

// any type for string
let notSure: any;

// Issue case (no error)
notSure = 25;
notSure = 42;
notSure = 'hello';

enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

enum DirectionsSecond {
    Up = 2,
    Down = 4,
    Left = 6,
    Right
}

DirectionsSecond.Up; // 2
DirectionsSecond.Down; // 4
DirectionsSecond.Left; // 6
DirectionsSecond.Right; // 7

DirectionsSecond[2]; // Up
DirectionsSecond[4]; // Down
DirectionsSecond.Left; // 6
DirectionsSecond.Right; // 7

enum links {
    youtube = 'https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g',
    vk = 'https://mikhail-hud.github.io/resume/',
    facebookhttps = 'https://www.facebook.com'
}

links.youtube // https://www.youtube.com/channel/UCTW0FUhT0m-Bqg2trTbSs0g

const enum DirectionThird {
    Up,
    Down,
    Left,
    Right,
}

let directions = [
    DirectionThird.Up,
    DirectionThird.Down,
    DirectionThird.Left,
    DirectionThird.Right,
];

//Never Type
// Function return Error
const msg = 'Hello'
const error = (msg: string): never => {
    throw new Error(msg)
}

// Function infinite loop
const infiniteLoop = (): never => {
    while (true) {
        console.log('hello')
    }
}

// Object type
const create = (o: object | null): void => {
};
create(1); // Argument of type 'number' is not assignable to parameter of type 'object'
create('42') // Argument of type 'number' is not assignable to parameter of type 'object'
create({name: 'hello'});

//Multiple types for one value
let id: number | string;
id = 25;
id = 'tr45pt';
id = true // Type 'boolean' is not assignable to type 'string | number'

// Type
type Name = string; // custom type creation
let test: Name;
test = '42'
test = 45 // Type 'number' is not assignable to type 'string'

/// functions
const createPassword = (name: string = 'Max', age: number | string = 25): string => `${name}${age}`
createPassword(); /// Max25

// functions with optional arguments
const createPasswordSecond = (name: string, age?: number | string): string => `${name}${age}`
createPasswordSecond('Jasmine'); // Jasmine

// rest function
const createSkills = (name: string, ...skills: Array<string>): string => `${name}, my skills are ${skills.join()}`;
createSkills('Jasmine', 'React', 'Js', 'Redux') // Jasime, my skills are React,Js,Redux

// void functions that do not return a value
const greetUser = (): void => {
    alert('Hello World')
}

//Never  is the return type for a function expression or an arrow function expression that always throws an exception or one that never returns.
const message = 'hello'
const newError = (message: string): never => {
    throw new Error(message);
}
// Function returning never must not have a reachable end point
const infinite = (): never => {
    while (true) {
    }
}


