// playing around with reduce...

// it takes an array and uses some combine function to reduce it to a single value..

let array = [1, 2, 3, 4, 5];

function sum(array, sum=0) {
    for (let element of array) sum += element;
    return sum;
}


function reduceSum(array, addNumber, start) {
    let sum = start;
    for (let element of array) {
        sum = addNumber(element, sum);
    }
    return sum;
}

function addNumber(number, sum) {
    return sum += number;
}


function totalNmaes(names, tot=0) {
    for (let name of names) ++tot;
    return tot;
}

function totNames(name, tot) {
    return (name) ? ++tot : tot;
}

function reduceNames(array, totNames, start) {
    let tot = start;
    for (let element of array) {
        tot = totNames(element, tot);
    }
    return tot;
}



let names = ["Aimable", "JeanLuke", "Uwase", "Carine", null, "Didier"];
console.log(sum(array));
console.log(totalNmaes(names));
console.log(reduceNames(names, totNames, 0));
console.log(reduceSum(array, addNumber, 0));

// we could make a single general function to reduce both nums and names
function reduce(array, combine, start){
    let current = start;
    for (let element of array) {
        current = combine(element, current);
    }
    return current;
}
// this would work both for numbers and names (in our example)
console.log()
console.log(reduce(names, totNames, 0));
console.log(reduce(array, addNumber, 0));
