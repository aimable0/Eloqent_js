/* A program to illustrate stack overflow */
// what is a stack: a stack is a collection of contexts from which different function calls happen
// stack stores contexts of function calls.
// this helps in contrl flow to know where the function called should return the control.

function chicken() {
    return egg();
}

function egg() {
    return chicken();
}

console.log(chicken() + " came first");
