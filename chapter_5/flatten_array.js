// a program that flattens an array of arrays.

let array = [[1, 2, 3, 4], [5, 3, 1], 3];
let arr2 = [12];
let combined = array.concat(arr2);
// console.log(combined);


let sample = array.reduce((arr, e) => arr.concat(e), []);
// console.log(sample);

// the appraoch used above only works for only one level of inner arrays, for more levels it wouldn't work
// challenge: how would we approach it differently to flatten every inner array.
let a = [1, 2, 3, 4, [0, -1, [-2, -3, [-4, -5]]], 9, [10, [11], [12, [13, 14, [15]]]]];

// let solve this with recursion.
function flatten(a) {
    let new_array = [];
    for (let el of a) {
        if (typeof el === 'object')
            new_array = new_array.concat(flatten(el));
        else
            new_array = new_array.concat(el);
    }
    return new_array;
}
// test..
let c = flatten(a);
console.log(c); // -> completely flattened array.

// mend reduce function into the above function (flatten)
function flatten_v1(a) {
    return a.reduce((current_arr, e) => {
        if (typeof e === 'object') current_arr = current_arr.concat(flatten_v1(e));
        else current_arr = current_arr.concat(e);
        return current_arr;
    }, []);
}

// succinct version
function flatten_v2(a) {
    return a.reduce((current_arr, e) => {
        return (typeof e === 'object') ? current_arr.concat(flatten_v1(e)) : current_arr.concat(e);
    }, []);
}

let ab = [1, 2, 3, 4, [0, -1, [-2, -3, [-4, -5]]], 9, [10, [11], [12, [13, 14, [15]]]]];
let ab_flat = flatten_v1(ab);
console.log(ab_flat);

// more test with book solution.
//
let arraySample = [[1, 2, 3], [4, 5], [6]];
console.log(arraySample.reduce((flat, current) => flat.concat(current), []));
// book solution..
console.log();
console.log("book solution on this:", ab);
console.log(ab.reduce((flat, current) => flat.concat(current), []));
// my solution
console.log(flatten(ab));

// Review: my solution works but in real world it's less likely to be used, since we would rarely face such kind of nested data (as ab)...
// but it was a good exercises...