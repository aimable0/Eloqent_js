// ----  concept: UTF-16, CODE UNIT, UNICODE ect -------

// important notes:
// Javascript string is not a sequence of unicode characters.
// Javascript string is a sequence of utf-16 "code units" which are 16-bit integers.
// CODE UNITS... some unicode character code do fit in one code unit others don't
console.log("🐴👟".length);

// js's charcterCodeAt

console.log("🐴👟".charCodeAt(1));
console.log("🐴👟"[0]); // invalid.
console.log("Aimable"[1]);

/// ----  USING ƒ charCodeAt(index) and ƒ codePointAt(index)  ----

let myName = "Aimable";
console.log(myName.charCodeAt(0)); // UTF-16 code unit for 'A'.
console.log(myName.codePointAt(0)); // Unicode character code for 'A'
// in this case they happen to be the same

// but here is where they differ.
// in some strings where a character takes up two 16-bit code units.
// example
let horseShoe = "🐴👟";
console.log(horseShoe.charCodeAt(0)); // gives us a code unit. -> 55357
console.log(horseShoe.codePointAt(0)); // full Unicode Character. -> 128052



