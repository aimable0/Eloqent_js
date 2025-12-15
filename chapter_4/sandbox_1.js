let list = {
    value: -1,
    rest: {
        value: 0,
        rest: {
            value: 1,
            rest: {
                value: 2,
                rest: {
                    value: 3,
                    rest: {
                        value: 4,
                        rest: {
                            value: 5,
                            rest: null,
                        }
                    }
                }
            }
        }
    }
}
console.log(list);

// how else could that be achieved
/ let object = {
//     value: 2,
//     rest: null,
// };

// let list = {
//     value: 1,
//     rest: object,
// };

// object = {
//     value: 0,
//     rest: list,
// }
// list = object;

// object = {
//     value: -1,
//     rest: list,
// };
// list = object;

// object = {
//     value: -2,
//     rest: list,
// };
// list = object;

// console.log(list);

// list = object;

// object = {
//     value: 0,
//     rest: list
// }

// list = object;

// object = {
//     value: -1,
//     rest: list,
// }


// working version 1.
// let list = {
//     value: 2,
//     rest: null,
// };

// let object = {
//     value: 1,
//     rest: list,
// }

// list = {
//     value: 0,
//     rest: object,
// }

// console.log(list.value);
// console.log(list.rest.value);
// console.log(list.rest.rest.value);
// console.log(list.rest.rest.rest.value);
// console.log(list.rest.rest.rest.rest.value);
// console.log(list?.rest?.rest?.rest?.rest?.rest?.value);

// more drafts
// let lastObject = {
//     Value: 3,
//     rest: null,
// };

// let object = {};

// let list = {
//     value: 2,
//     rest: {value: 3, rest: null}, //! figure out why this is not working.
// };

// object = {
//     value: 1,
//     rest: list,
// }

// list = {
//     value: 0,
//     rest: object,
// }

// console.log(list);