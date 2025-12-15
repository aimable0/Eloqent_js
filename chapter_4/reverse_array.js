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

function reverseArrayInPlace(array) {
    // let's assume we had an array of 4 elements.
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
