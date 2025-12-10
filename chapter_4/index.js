myString = "aimable";

// different ways to access properties of values
// valuable note: allmost all jsvalues have propperties except null and undefined
console.log(myString.length);
console.log(myString['length']);
propertyName = 'length';
console.log(myString[propertyName]);

// let's try to create an object that represents a person
let person = {
    name: 'Aimable',
    age: '12',
    1: "Karake yaje"
}
console.log(person.name);
console.log(person.age);
console.log(person[1]); //  interesting!
person.vocation = "programmer";
console.log(person.vocation);
person.vocation = 'senior programmer';
console.log(person.vocation);

// we could simulate a an array lke below (using object concept)
let array = {
    0: 1,
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    5: 1,
}
// console.log(array[0]);
// console.log(array[1]);
// console.log(array[2]);
// console.log(array[3]);

// and lets simulate the push method
// what we are doing is to assign new/modify existing properties to object array
array[6] = 0;
array[7] = 0;
for (let i = 0; i < 8; i++) {
    console.log(array[i]);
}


// a few more object methods
let product = {
    category: 'eloctronic',
    price: 200,
    color: 'black',
    toBeDeleted: true,
};

console.log(Object.keys(product)); // -> list of product's properties

delete product.toBeDeleted;
console.log(Object.keys(product)); // notice that we are using the 'Object.keys()' function.
console.log(product.toBeDeleted);

// console.log(color in Object.keys(product)); // true if color is a property of product object.
console.log(product); // prints the whole object with properties and values.
console.log("color" in product);
console.log(1 in [1, 2, 4]);
console.log("water".includes('p'));
// console.log("color" in Object.keys(product));
// console.log( Object.keys(product));

// HOW CAN WE COPY AND PASTE OBJECT DATA across objects.(using Objects.assign).
// let's create an object on the go and assing it to another
let sampleObject = {};

console.log(sampleObject); // empty object
// let's copy properties and values from another object into this one
Object.assign(sampleObject, {color: 'blue', size: 'small', texture: 'cotton'});
console.log(sampleObject); // sampleObject should be filled with data now.

// objects are mutable but we can force them to be 'immutable' to some extent
const notChangingObject = {name: 'Aimable', age: 23};
console.log(notChangingObject);
notChangingObject.age = 24; // okey eve on 'const' object.
notChangingObject.name = 'BabuG';
console.log(notChangingObject);
// when is const effective then
notChangingObject = {}; // here when trying to change the object the const binding is pointing at.
