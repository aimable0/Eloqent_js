// mimic list iterable
// let list = {
//   value: 1,
//   rest: {
//     value: 2,
//     rest: {
//       value: 3,
//       rest: null
//     }
//   }
// };

// Let’s implement an iterable data structure similar to the linked list from the exercise in Chapter 4

// sample drafts
let stringIterator = 'string'[Symbol.iterator](); // this returns an object.. that has next as method.

console.log(typeof stringIterator);

for (let i = 0; i < 'string'.length; i++) {
    let obj = stringIterator.next();
    console.log(obj);
    console.log(obj.value);
}


class List {
    constructor() {
        this[Symbol.iterator] = iteratorFunc;
    }

    iteratorFunc() {
        
    }

}
