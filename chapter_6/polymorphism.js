//                  ===== POLYMORPHISM ======

// PolyMorphism: the ability to treat different kinds of objects/values uniformly
// as long as they support the same operation or interface.

// consider the code below.
let getLength = (value) => value.length; // Polymorphic code.
// This technique is called polymorphism.
// Polymorphic code can work with values of different shapes, as long as they support the interface it expects.”

// outputs.
console.log(getLength("water")); // -> 5
console.log(getLength([1, 2, 3])); // -> 3

// this is extensible and mantainable (less code to achieve more)
// and enables reuse: write a generic code that works with different types of objects
