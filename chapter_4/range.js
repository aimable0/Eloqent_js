function range(start, end) {
    let list = [];
    for (let i = start; i <= end; i++) {
        list.push(i);
    }
    return list;
}

console.log(range(1, 10)); // -> [1, ..., 10]

function sum(numbers) {
    let sum = 0;
    for (let number of numbers) sum += number;
    return sum;
}

console.log(sum(range(1, 10))) // -> 55

// trying out something
// console.log();
// function print(...data) {
//     for (let num of data) {
//         console.log("1", num);
//     }
// }
// print(range(1, 10));
