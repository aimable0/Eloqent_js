/* Abstract Data types. */

// samples
// using abstract data types as main unit for program organization

function speak(line) {
    console.log(`This ${this.type}rabbit says '${line}'`);
    // the 'this' binding automatical refers to the object on which this function was called.
    // it's kinda like an extra parameter that's passed to the function automatically (dependin on how the function was called)
}

let rabbit = {type: 'White', speak};
let rabbit1 = {type: 'Black', speak};
rabbit.speak('Hey, there!');
rabbit1.speak("Hey, What's up");


// we could use .call on functions and then pass the 'this' as the first argument
speak.call(rabbit, "Heyyoo");

// more samples
console.log();
let finder = {
    find(array) { return array.some(v => v == this.value)}, // shorthand of creating a method.
    value: 1,
}

// test something.. ('this' using function that are not arrow function can't work)
// let finder = {
//     find: (array) => { return array.some(function (v) {
//         console.log(this);
//         return v == this.value; // this refers to finder object.
//     })},
//     value: 10,
// }

let ans = finder.find([1, 10]);
console.log(ans);


// testing something..
let sample = {
    value: 1,
    func: (value) => {
        console.log(value);
    }
}


sample.func(1);

//PROTOTYPES.
// the concept of Object.prototype in Js

// how else would we create our rabbit's' object's'

function createRabbit(rabbit, ) {
    return {type: rabbit, speak};
}
console.log();
let myRabbit = createRabbit('Yellow');
myRabbit.speak('Hello, its yellow B!');


// prototypes help us creat other objects with some predefined properties.
// new method: Object.getPrototypeOf(Object)

// a couple of objects derive from Object.prototype directly
console.log(Object.getPrototypeOf({}) == Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype));

// functions derive from Function.prototype.
console.log();
console.log(Object.getPrototypeOf(Math.max));
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
console.log(Object.getPrototypeOf(Function.prototype));

// arrays derive from Array.prototype.
console.log();
console.log(Object.getPrototypeOf([1, 2]) == Array.prototype);
console.log(Object.getPrototypeOf(Array.prototype));

// important note: this Function.prototype and Array.prototype themselves derive from Object.prototype


// HOW DO WE CREATE AN OBJECT WITH A SPECIFIC PROTOTYPE.
// 1. We create a prototype
let protoRabbit = {speak}; // whatever properties are here will be shared with all rabbits

// 2. We create an object with the prototype.
let newRabbit = Object.create(protoRabbit);
console.log(Object.getPrototypeOf(newRabbit) == protoRabbit); // -> true.
console.log(Object.getPrototypeOf(protoRabbit) == Object.prototype); // -> true.

// we can add unique properties.
newRabbit.type = "Green";
console.log(newRabbit) // -> {type: Green}
newRabbit.speak("Hey, there it's Rbt Green!"); // speak is an accessible method to newRabbit because of its prototype
