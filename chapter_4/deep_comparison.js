function deepEqual({...object1}, {...object2}) {
    if (Object.keys(object1).length == 0 && Object.keys(object1).length == 0) return true;
    else if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    else if (Object.keys(object1).sort()[0] !== Object.keys(object2).sort()[0]) return false;

    if (typeof object1[`${Object.keys(object1).sort()[0]}`] === 'object') {
        if (!deepEqual(object1[`${Object.keys(object1).sort()[0]}`], object2[`${Object.keys(object2).sort()[0]}`])) return false;
    } else if (object1[`${Object.keys(object1).sort()[0]}`] !== object2[`${Object.keys(object2).sort()[0]}`]) return false;

    // pop properties and keep comparing.
    delete object1[`${Object.keys(object1).sort()[0]}`];
    delete object2[`${Object.keys(object2).sort()[0]}`];
    return deepEqual(object1, object2);
}

// how would we handle booleans and arrays as values.

let object1 = {value: {values: false, water: [1, 2, 3]}, name: "Anages", sex: "female", drinksWater: true, aobj: {name: 1, school: {name: 'la promise', secondary: 'kagarama'}}};
let object2 = {value: {values: false, water: [1, 2, 3]}, name: "Anages", sex: "female", drinksWater: true, aobj: {name: 1, school: {name: 'la promise', secondary: 'kagarama'}}};
console.log(deepEqual(object1, object2));

console.log()
console.log("Book sample tests: ");
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // -> true.
