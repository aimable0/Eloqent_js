/* A function that returns a new array with elements of the argument, but in reverse order.*/
function reverseArray(array) {
    let arrayReversed = [];
    let len = array.length;
    console.log(len);
    for (let i = 0; i <= len; i++) {
        if (i == 0) len--;
        arrayReversed[len - i] = array[i];
    }
    return arrayReversed;
}

let array = [1, 2, 3, 4, 5];
let reversed = reverseArray(array);
console.log(array);
console.log(reversed);


/* A function that modify the provided array by reversing it's element's order */
function reverseArrayInPlace(array) {
    let currentLast = array.length - 1;
    let desiredLen = Math.floor(array.length / 2);
    for (let i = 0; i < desiredLen; i++, currentLast--) {
        let temp = arr[i];
        array[i] = array[currentLast];
        array[currentLast] = temp;
    }
}

console.log();
let arr = [5, 6, 7, 8, 9, 10]
console.log(arr);
reverseArrayInPlace(arr);
console.log(arr); // [10, 9, 8, 7, 6, 5]

