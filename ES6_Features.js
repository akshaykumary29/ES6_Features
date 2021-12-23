// ES 6 Features in Javascript

// 1.let and const, block scope keywords
// 2.multiline strings
// 3.Default parameter
// 4.Template literal
// 5.Enhanced Object Literal
// 6.Destructuring assignment
// 7.Promises
// 8.Classes
// 9.Module
// 10.for/of



//let and constant ,block scope keywords
var number = [1,2,3,4,5];

function display() {
  for (var i = 0; i < number.length; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
display(); // Output: 5 5 5 5 5

function display() {
  for (let i = 0; i < number.length; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
display(); // Output: 1 2 3 4 5

// const 

const Rate = 0.1;
Rate = 0.2;
console.log(Rate); // TypeError: Assign. to constant var.

const person = { age: 25 };
person.age = 30;
console.log(person.age); // 30

const person = { age: 25 };
person = {age: 30};
console.log(person.age); // TypeError

// -------------------------------------------------------

// 2. Multiline String
// using backtick (``)

console.log(`First line here
Then Second line here
and Then Third line here`);
 
// -------------------------------------------------------

// 3. Default Parameters

function addTwo(a, b) {
    return a + b;
}
const ans = addTwo(4, 8);
console.log(ans); // 12

function addTwo(a, b = 2) {
    return a + b;
}
const ans = addTwo(4, 8);
console.log(ans); // 12

function addTwo(a, b = 2) {
    return a + b;
}
const ans = addTwo(4);
console.log(ans); // 6

// -------------------------------------------------------

// 4. Template literal
let firstName = "Akshay",
    lastName = "Yamgar";

let greeting = `Hi , ${firstName} ${lastName}.`;
console.log(greeting); // Hi, Akshay Yamgar.

// ---------------------------------------------------------

// 5. Enhanced Object Literal
let name = 'Computer',
    status = 'On';

let machine ={
    name,status
}
console.log(machine);

function getCar(model, color, price) {
    return {
        model,
        color,
        price,
    };
}
console.log(getCar("Innova", "White", "28,00,000"));

// -----------------------------------------------------------

// 6. classes
class person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getName() {
        console.log(`The fullname is ${this.firstName} ${this.lastName}`);
    }
}
let a = new person("Akshay", "Yamgar");
a.getName();

// ------------------------------------------------------------

// 7. Arrow Function

const sumThreeNumber = (num1, num2, num3) => {
    return num1 + num2 + num3;
}
const sum = sumThreeNumber(2,3,4);
console.log(sum);

const isEven = (Number) => {
    return Number % 2 == 0;
}
console.log(isEven(8));