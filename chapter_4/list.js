function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = {
            value: array[i],
            rest: list,
        };
    }
    return list;
}

let list = arrayToList([1, 2, 3]);
console.log(list);


//! it's worth noting that the console.log won't display more than 2 nested object,
//! the rest will be represented by [Object]
// we could try to check their values (using optional chaining) as follows.
// console.log(list?.rest?.rest?.rest?.value);
// console.log(list?.rest?.rest?.rest?.rest?.value);
