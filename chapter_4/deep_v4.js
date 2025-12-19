/* Let's try to refine version one */
// instead of poping values le'ts try to loop through props and values.
function deepEqual(object1, object2) {
    if (object1 === object2) return true;

    if (object1 == null || object2 == null ||
        typeof object1 != 'object' || typeof object2 != 'object') return false;


    let keysA = Object.keys(object1);
    let keysB = Object.keys(object2);

    if (keysA.length != keysB.length) return false;

    // loop through key's values and compare them
    for (let key of keysA) {
        if (typeof (object1[key]) === 'object') {
            if (!deepEqual(object1[key], object2[key])) return false;
        } else if (object1[key] !== object2[key]) return false;

        // this version is a refinemnt of the first version but it could benefit from refinements as follows
        // if (!keysB.include(key)) || !deepEqual(object1[key], object2[key])) return false;

        // Q: examine why the short hand below ain't working..
        // A: reason suspected: short-circuit concept.
        // if (((typeof (object1[key]) == 'object') && !deepEqual(object1[key], object2[key]))
        //     || object1[key] != object2[key]) return false;

    }
    return true;
}

// tests.
let obj1 = {value: 1, name: {values: 0, ns: [1, 2]}};
let obj2 = {value: 1, name: {value: 0, ns: [1, 2]}};
console.log(deepEqual(obj1, obj2));

console.log("Book sample tests: ");
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj)); // → true
console.log(deepEqual(obj, {here: 1, object: 2})); // → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2})); // -> true.
console.log();
console.log(deepEqual({a: 1}, {a: "1"}));