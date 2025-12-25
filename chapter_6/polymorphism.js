// PolyMorphism: the ability to treat different kinds of objects/values uniformly

// consider the code below.
let getLength = (sample) => sample.length; // Polymorphic code.
// This technique is called polymorphism.
// Polymorphic code can work with values of different shapes, as long as they support the interface it expects.”

console.log(getLength("water")); // -> 5
console.log(getLength([1, 2, 3])); // -> 3
