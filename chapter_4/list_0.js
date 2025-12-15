/* A function that adds an element to the front of the list */
function prepend(element, list) {
    let newList = {
        value: element,
        rest: list,
    }
    return newList;
    // we could have written this as follows:
    // return {element, rest: list}
}

/* A function that returns a List from an Array */
function arrayToList(array) {
    let list =  null;

    // using helper function add the rest.
    for (let element of array.reverse()) {
        list = prepend(element, list);
    }

    // verbose version without helper function.
    // let tempObj = {};
    // for (let i = array.length - 2; i >= 0; i--) {
    //     tempObj = {
    //         value: array[i],
    //         rest: list,
    //     }
    //     list = tempObj;
    // }

    return list;
}

let list = arrayToList([1, 2, 3, 4, 5]);
console.log(list);


//! notice that the console.log won't display more than 2 nested object,
//! the rest will be represented by [Object]
// we could try to check their values (using optional chaining) as follows.
// console.log(list?.rest?.rest?.rest?.value);
// console.log(list?.rest?.rest?.rest?.rest?.value);


// test prepend.
// console.log()
// let list2 = arrayToList([1]);
// console.log(list2);
// use prepend to add elements.
// list2 = prepend(2, list2);
// list2 = prepend(3, list2);
// list2 = prepend(4, list2);
// console.log(list2);

// how would we make an array from list.

let samplelist = arrayToList([10, 20, 30, 40, 50]);

/* A function that returns an array from a List data structure */
function listToArray(list) {
    // check for empty lists.
    if (!list?.value && !list?.rest) return [];

    let array = [];
    let node = list;
    while(true) {
        if (!node) return array;
        array.push(node.value);
        node = node.rest;
    }
    // or using a for loop
    // for (let node = list; node; node = node.rest) {
    //     array.push(node.value);
    // }
    // return array
}

// test: listToArray function
console.log();
let array1 = listToArray(samplelist);
console.log(array1);

/* A function that returns an element from the list at position n */
function nth(list, n) {
    let array = listToArray(list);
    return array[n];
}

console.log(nth(list, 3));


// recursive version of nth (note: returns whole object element)
function recursive_nth(list, n) {
    if (list?.value && n == 0) {
        return list.value;
    } else if (!list) {
        return undefined;
    } else {
        return recursive_nth(list.rest, n - 1)
        // its good  to use n - 1 than shorthands like --n, i often mistake --n with n--;
    }
}

// test nth and recursive_nth functions
console.log();
n = 4;
console.log(nth(list, n));
console.log(recursive_nth(list, n));

// converting list into array.
// how could it be done manually
// let array = [];
// let node;
// array.push(samplelist.value);
// node = samplelist.rest;
// array.push(node.value);
// node = node.rest;
// array.push(node.value);
// node = node.rest;
// array.push(node.value);
// node = node.rest;
// console.log(array);
