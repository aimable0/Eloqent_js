// A program that returns true given a function returns true for every element in the array

// version 1
function every(arr, test) {
    for (let el of arr)
        if (!test(el)) return false
    return true;
}

// version 2
function every1(arr, predicate) {
    return !arr.some(e => !predicate(e)); // i.e is it true that they are some elements that return false with this test.
}

// test with version 1 and version 2.
console.log(every("aaaaaa", (e) => e == 'a')); // -> false
console.log(every1("aaaaa".split(''), (e) => e == 'a')); // -> false
// in version 2, we are using negative test to check if there's an element where certain condition is *not* true.
// which is an alternative way to check if a certain test is true for all elements.

console.log();
let arr = [3, 7];
console.log(arr.some(e => e % 2 == 0));

