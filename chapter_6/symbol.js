// testing samples
// what's a symbol: it's unique primitive data type that we can use ensure non colliding identifiers.

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
