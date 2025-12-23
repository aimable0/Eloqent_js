// a higher-order function loop that provides something like a for loop statement

function loopFunc(value, test, body, update) {
    while(test(value)){
        body(value);
        value = update(value);
    }
}

let arr = [1, 2, 3, 4, 5];
console.log(loopFunc(arr, v => {
    return v.length > 0;
}, (v) => console.log("here", v[v.length - 1]), arr => {
    return arr.slice(0, -1);
}));
