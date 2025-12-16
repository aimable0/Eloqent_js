/* Draft for developing a function that compares objects */

let object = {
    value: 1,
    name: 'Aimable',
    age: 43,
    profession: 'programmer',
};

// I have to find a way to shrink this object.
// so that it first gives me the first element,
// later the next one until we have no more.
delete object.age;
console.log(object);
console.log(`Object to be deleted: ${Object.keys(object).sort()[0]}`);
console.log(Object.keys(object).sort()[0] == Object.keys(object).sort()[0]);
console.log(Object.keys(object).sort()[0] === Object.keys(object).sort()[0]);
delete object[`${Object.keys(object).sort()[0]}`];
console.log(object);
console.log(`Object to be deleted: ${Object.keys(object).sort()[0]}`)
delete object[`${Object.keys(object).sort()[0]}`];
console.log(object);
console.log(`Object to be deleted: ${Object.keys(object).sort()[0]}`)
delete object[`${Object.keys(object).sort()[0]}`];
console.log(object);
console.log(`Object to be deleted: ${Object.keys(object).sort()[0]}`)
delete object[`${Object.keys(object).sort()[0]}`];
console.log(object);
console.log(`Object to be deleted: ${Object.keys(object).sort()[0]}`)
delete object[`${Object.keys(object).sort()[0]}`];

let sample = {
    bag: true,
    car: false,
    tree: true,
    obj: {
        value: 1,
    }
}

console.log(Object.keys(sample).sort());


let names = ['aimable', 'jeanluc', 'didier'];
let name = [];
// console.log(name.isEmpty());

console.log();
console.log();

console.log(typeof sample == 'object');
console.log(typeof sample[`${Object.keys(sample).sort()[0]}`]);
console.log(typeof sample[`${Object.keys(sample).sort()[1]}`]);
console.log(typeof sample[`${Object.keys(sample).sort()[2]}`]);
console.log(sample[`${Object.keys(sample).sort()[2]}`]);
console.log(typeof sample[`${Object.keys(sample).sort()[3]}`]);
console.log(typeof sample[`${Object.keys(sample).sort()[4]}`]);




