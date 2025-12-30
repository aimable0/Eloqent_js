// testing samples
// what's a symbol: it's unique primitive data type that we can use ensure non colliding identifiers.
// we can use this kinda of type to create variables that are guaranteed to have unique values.

const id1 = Symbol("id");
console.log(id1)
const id2 = Symbol("id");
console.log(id2)

console.log(Symbol('x') === Symbol('x'));

// sample

const internalId = Symbol('id');
let sampleObj = {
    name: 'Vanessa',
    [internalId]: 123,
    internalId: 122,
}
let identifyr = internalId;
console.log(Object.keys(sampleObj)); // not visible in keys collection.
console.log(sampleObj[internalId]);
console.log(sampleObj[identifyr]);

// how could we demonstrate this
// using concepts:
// const BLUE = Symbol('blue');
const BLUE = Symbol('blue');
const RED  = Symbol('red');
const GREEN = Symbol('green');
const ORANGE = Symbol('orange');
const bluee = 'blue';

let color = Symbol('blue');
switch(color) {
    case RED: console.log('Red Color...'); break;
    case BLUE: console.log('Blue Color...'); break;
    case GREEN: console.log('Green Color...'); break;
    case ORANGE: console.log('Orange Color...'); break;
    default : console.log('Unknown Color ...'); break;
}

// concept: using .for (would make symbols with the same descriptor identical).
// const BLUE = Symbol.for('blue');
// const RED  = Symbol('red');
// const GREEN = Symbol('green');
// const ORANGE = Symbol('orange');
// const bluee = 'blue';

// let color = Symbol.for('blue');
// switch(color) {
//     case RED: console.log('Red Color...'); break;
//     case BLUE: console.log('Blue Color...'); break;
//     case GREEN: console.log('Green Color...'); break;
//     case ORANGE: console.log('Orange Color...'); break;
//     default : console.log('Unknown Color ...'); break;
// }


// CONCEPT: multiple interfaces can have same property name for different purpose (different things)
console.log({name: 'Aimable', age: 21}.length); // undefined concept
console.log([1, 2, 3].length); // returns number of element.
console.log('Aimable'.length); // returns number of chars in a string.

// Little illustration
class Person {
    constructor(name, age, sex) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.car = 'Benz';

        let length = Symbol.for('length');
        this[length] = '1.6m';
    }
}

let person1 = new Person('Aimable', 21, 'M');

person1.car = 'Mercedz';
console.log(person1);
// in order not to conflict I should have don this.
let car = Symbol('car');
person1[car] = 'Benz Mercedz';

// this can't be seen as we would normal props.
console.log(Object.getOwnPropertyNames(person1));
console.log(Object.getOwnPropertySymbols(person1)); // here we see all the symbols.
// console.log(person1[length]);
// console.log(person1[car]);
let length = Symbol.for('length');
console.log(person1[length]);
console.log(Object.getOwnPropertySymbols(person1)); // here we see all the symbols.


//Demo two
console.log([1, 2].length)// -> 2 elements.
// Imagine we wanted another prop called length but for a different purpose
// Array.prototype.length // we can;t do this this would seem to override the actually length prop
// we can rather do this.
Array.prototype[length] = 0;
console.log([1, 2].length); // -> 2
console.log([1, 2][length]); // -> 0

console.log(Symbol.iterator);