// this 'for (let i = 0; i < "Aimable".length; i++)' can be easily written as follows:
for (let letter of "Aimable") {
    console.log(`current letter: ${letter}`);
}


let sample = [1, 2, 3, 4, 5, 6]
// we know we ca use pop and push to remove and add element to the array at the bottom (much like stack in c.)
// we can also use shift and unshift to remove and add lelement at the beginning of the array
sample.shift(); // removes the first element
console.log(sample) // -> [2, 3, ...]
sample.unshift(0); // adds 0 at the beginning
sample.unshift(1); // adds 1 at the beginning
console.log(sample) // -> [1, 0, 2, 3, ...]


// --- little project: a simple task queue
// to get a task to complete;
// to add a task
// to add urgent tasks

let taskList = [];
function addTask(task) {
    taskList.push(task);
}

function getTask() {
    return taskList.shift();
}

function addUrgentTask(task) {
    return taskList.unshift(task);
}

// let's test it
addTask('drinking water');
addTask('cleaning up my room');
addTask('taking a shower');
addTask('coding');
addTask('reading the Truth');

console.log(getTask());
console.log(getTask());

// add un urgent task
addUrgentTask('read the Bible');
addUrgentTask('pray');

console.log(getTask());
console.log(getTask());


// using indexOf and lastIndexOf
let numbers = [21, 22, 23, 25, 40, 50, 21, 22]
console.log(numbers.indexOf(22)); // 1
console.log(numbers.lastIndexOf(21)); // -> 7

// how does the from index work
let sample$ = [2, 1, 2, 3, 4, 5, 6, 1]
console.log(sample$.lastIndexOf(6,));
// indexOf starts searching from the start hence it valid fromIndex value can be 0, 1, 2 etc
// lastIndexOf starts at the end hence its valid fromIndex value can be -1, -2 ...



// how do slice work
let letters = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letters.slice(3, letters.length));
let newLetters = letters.slice(); // in this case we are using slice() a bit cleverly to return a new copy.
console.log(newLetters);
newLetters[1] = 'd';
console.log(newLetters);
console.log(letters);

// create a simple function that removes an element from an index

function remove(array, index) {
    return array.slice(0, index).concat(array.slice(index + 1));
}

console.log(remove(['a', 'b', 'c', 'd'], 2)); // -> ['a', 'b', 'd']

// COMMON METHOS ON STRINGS
// give me 4 common methods.
let string = 'Aimable';
console.log(string.slice(string.lastIndexOf('a'))); // -> able.
console.log(string.split(""));
let string$ = "Aimable$ ";
console.log(string$.trimStart())
console.log(string$.trimEnd()); // the old versin was rtrim() and ltrim()
// a new feature of indexOf() when applied on strings is that it can search for more than one char
console.log("aimable".indexOf("ab"));

// using split for an a clear example
let sentence = "Aimable Nkurikiyimana"
console.log(sentence.split(" ").join("_")); // "Aimable_Nkurikiyimana"

// padStart.. we also have padEnd.
console.log("6".padStart(5, "0"));
console.log("56".padStart(5, "0"));

// .repeat
console.log("Aimable ".repeat(5).trim());

