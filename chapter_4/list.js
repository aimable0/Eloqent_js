function arrayToList(array) {
    let tempObj = {};

    //check if array is not empty
    if (!array) return {};

    // initialize list by adding the first element.
    let list = {
        value: array[array.length - 1],
        rest: null,
    };

    for (let i = array.length - 2; i >= 0; i--) {
        tempObj = {
            value: array[i],
            rest: list,
        }
        list = tempObj;
    }

    return list;
}

let list = arrayToList([1, 2, 3, 4, 5]);
console.log(list);


//! notice that the console.log won't display more than 2 nested object,
//! the rest will be represented by [Object]
// we could try to check their values (using optional chaining) as follows.
console.log(list?.rest?.rest?.rest?.value);
console.log(list?.rest?.rest?.rest?.rest?.value);
