if (true) {
    var x = 100;
    // let y = 12;
}
console.log(x);
// console.log(y);

// functions definition
const halve = function() {
    return n / 2;
};

let n = 10;
console.log(halve());

const halve$ = function(n) {
    return n / 2;
}

console.log(halve$(25));

const greet = function() {
    console.log("Hello!");
};

// ---- function declaration -----
function greetPeople() {
    return greet;
}

const functionReturned = greetPeople();
functionReturned();

console.log("Mr Aimable", "Hello");

// ----- arrow functions ------
const arrowFunction = (userName) => {
    console.log(`Hello ${userName ?? "User"}!`);
    // console.log("Hello,", userName ?? "User", "!");
}
arrowFunction("Aimable");

// other ways to write arrow function
// when we have just one param and only one line in the function body.
const arrowFunc1 = userAge => console.log(`You are ${userAge} years old.`);
arrowFunc1(12);

// when we have just one return statement in the function body and only it.
const arrowFunc2 = () => "This function just returned!";
let valueReturned = arrowFunc2();
console.log(valueReturned);

let value$ = arrowFunc1(12);
console.log("The value is the following:", value$);


console.log(undefined === undefined);


/**
 * functions in Js can have too many and too few arguments and the program will not treat that as error
 * rather if too many; the others are ignored
 * if too few; the params will be assigned with undefined
 * this can be useful with it's pros and cons.
 * see example below to greet a user.
 */
function greetUser(firstName, secondName) {
    console.log(`Hello, Mr ${firstName ?? "User"} ${secondName ?? ""}`);
}
greetUser("Aimable", "Nkurikiyimana");
greetUser("Aimable");
greetUser();

// we could even fine tune that behaviour by using explicit defalut values.
function greetUser1(firstName="User", secondName="") {
    console.log(`Hello, Mr ${firstName} ${secondName}`);
}

greetUser("Muhire", "Didier");
greetUser("Didier");
greetUser();

// ------  CLOSURE -----
function wrapValue(n) {
    return () => n;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
console.log(wrap1());
console.log(wrap2());

// more closures
// important note is that twice and thrice sees and remembers environmnt in which they were created not in which they were called.
// unless ofcourse its using global bindings..
function multiplier(factor) {
    // the function being returned is a closure..
    return number => number * factor;
}

const twice = multiplier(2);
const thrice = multiplier(3);

console.log(twice(5));
console.log(thrice(5));
