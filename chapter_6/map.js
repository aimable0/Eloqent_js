// DataStructure: Map.(values(aka keys) associated with other values)

// ====== MAP as an object  ==========
// note: Object property names must be string.
let age = {
    'Boris': 19,
    'Blessing': 29,
    'James': 39,
    'Keith': 49,
    'Aimable': 59,
};

// couple of operations.
console.log(`Boris's age is ${age.Boris}`);
console.log(`Keith's age is ${age.Keith}`);

// test if someone's age is known
console.log(`Blessing's age is known: ${'Blessing' in age}`); // -> true
console.log(`James's age is known: ${'James' in age}`); // -> true
console.log(`toString's age is known: ${'toString' in age}`); // -> true. (hmm...)

// now we can see that we have toString inside age (but we didn't have that stored in our map)
// that means that the operator 'in' considers also other values that may be stores in the Map's prototype)
// let's test that
console.log(Object.getPrototypeOf(age) === Object.prototype) // -> true
// because age is a plain object it's derived from Object.prototype hence it has the value toString
console.log(age.toString()); // -> [object Object] .. but the idea is that that method somehow is accessible through age

// .. this could have caused some error.
// alternatives #1
// .hasOwn(object, property (string or variable containing property name)) method
console.log(Object.hasOwn(age, 'toString')) // -> false
console.log(Object.hasOwn(age, 'Boris')) // -> true

// alternative #2
console.log(Object.keys(age).includes('toString')) // -> false
console.log(Object.keys(age).includes('Boris')) // -> true

// alternative #3 - create an object that has no Object.prototype
let cleanMap = Object.create(null);
// check proto
console.log(Object.prototype === Object.getPrototypeOf(cleanMap)) // -> false
console.log(Object.getPrototypeOf(cleanMap) === null) // -> true, i.e it has no prototype.


//              ==== EXPLORE: JS'S CLASS 'MAP' =====
// map gives use a couple of operation that would be usefl to process large data sets such as: has, set, get
console.log("\n============ MAP =========\n");
let map = new Map(); // simply map' user's to their computers :)..
console.log(typeof map);
map.set('Aimable', 'Mac');
map.set('Boris', 'Hp');
map.set('Blessing', 'Lenovo');
map.set('James', 'Lenovo');
map.set('William', 'X86 Linux comp');
map.set('Liliane', 'Chromebook');

console.log(map); // all values and keys..
console.log(map.get('Blessing')); // -> Lenovo
console.log(map.get('James')); // -> Lenovo.
console.log(map.has(toString)); // -> false
console.log(map.has('William')); // -> true.

// let's do some updates.
map.set('Blessing', 'Lenovo ThinkPad');
map.delete('William');
console.log(map); //

// we could do something interesting like this );.
map.forEach((pc, usr) => console.log(`${usr} owns a ${pc} laptop.`));
console.log();
// clear everything for a fresh start :)
map.clear();
console.log(map); // empty set.
