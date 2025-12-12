function range(start, end, step=(start < end)?1:-1) {
    let list = [];
    
    // version 1.
    // if (step < 0) {
    //     for (let i = start; i >= end; i -= -(step)) list.push(i);
    // } else {
    //     for (let i = start; i <= end; i += step) list.push(i);
    // }

    // version 2.
    for (let i = start; (start < end) ? i <= end : i >= end; i += step)
        list.push(i);
    return list;
}

console.log(range(5, 10));

// function sum(numbers) {
//     let sum = 0;
//     for (let number of numbers) sum += number;
//     return sum;
// }

// console.log(sum(range(1, 10))) // -> 55

// trying out something
// console.log();
// function print(...data) {
//     for (let num of data) {
//         console.log("1", num);
//     }
// }
// print(range(1, 10));

// BONUS ASSIGNMENT

