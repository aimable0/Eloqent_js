/* A program that helps us know whether a positive whole number is even or not. */
function isEven(number) {
    if (number < 0)
        number *= -1;

    if (number === 0)
        return true;
    if (number === 1)
        return false;
    return isEven(number - 2);
}

// tests
console.log(isEven(-100)); // true
console.log(isEven(0)); // true
console.log(isEven(1)); // false
console.log(isEven(50)); // true
console.log(isEven(75)); // false
