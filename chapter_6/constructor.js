// concept: constructor function.
// a constructor function helps us create an object of a certain type.

// sample
// 1. we create a prototype.
let protoRabbit = {
    speak(line) {
        console.log(`This ${this.type}rabbit says '${line}'`);
    }
};

// 2. we use the prototype to create
function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit); // this means our rabbit get's the speak property
    // we can add more
    rabbit.type = type;
    return rabbit;
}

let myRabbit = makeRabbit('Green');
myRabbit.speak('Hey there, my friends are moving from town.');

// test prototype
console.log(Object.getPrototypeOf(myRabbit) === protoRabbit); // -> true.
console.log(Object.getPrototypeOf(protoRabbit) === Object.prototype); // -> true.
console.log(Object.getPrototypeOf(Object.prototype)); // -> null.

// concept: classes in Js
// we could make it easy to create such an object (instance) by using class keyword
// before we use class

// let's break down what class really does behind the scene (using our rabbit example).
console.log();
let sampleRabbit = {};
Object.setPrototypeOf(sampleRabbit, protoRabbit);
// console.log(Object.getPrototypeOf(sampleRabbit) == protoRabbit); //-> true.
function rabbitty(type) {
    this.type = type;
}
rabbitty.call(sampleRabbit, 'Runner');
sampleRabbit.speak("Hey, oo .. I am here!");



// ----- CLASS ------
// using class keyword: classes are special kind of functions.
// but they bring no new kind object.
// but rather a syntactic sugar for constructor functions.

// we could define a constructor as follows
class Rabbit {
    hair = 'white' // notice we are not using let in creating the property.
    constructor (type) {
        this.type = type;
    }

    speak(line) {
        console.log(`This ${this.type}-rabbit says '${line}'`);
    }
}
console.log('---- test ----');
let myRabb = new Rabbit("Gringo");
myRabb.speak("What's up people!");
console.log('hair:', myRabb.hair);
// check prototypes
console.log(Object.getPrototypeOf(myRabb) == Rabbit.prototype); // -> true
console.log(Object.getPrototypeOf(Rabbit) == Rabbit.prototype); // -> false
console.log(Object.getPrototypeOf(Rabbit) == Function.prototype); // -> true

// some props can live on the prototype others on individuall instance
// methods live on the prototype , meaning when you try o check methods on the instance they won't show up
// but har prop leaves on the individiual instance

console.log(myRabb); // -> {hair: 'white', type: 'Gringo'}
