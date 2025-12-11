// how can we use rest params

// 1. is in function (where we accept a number of args)
function manyArgs(...args) {
    for (let arg of args) {
        console.log(arg);
    }
}

manyArgs("arg1", "arg2", "arg3", "arg4", "arg5");
console.log();

// this doesn't inhibit the function to receive some args which are not part of the list
function funcWithRestParams(firstArg, secondArg, ...args) {
    console.log("First  argument:", firstArg);
    console.log("Second argument:", secondArg);
    for (let arg of args) {
        console.log("Others args: ", arg);
    }
}
// this is a case were we have the firstArg that we might want to treat different and the rest.
funcWithRestParams("mainArgument", "secondArg", "therArg1", "therArg2", "therArg3", "therArg4");

//! important note: ...rest parameter MUST be last in the parameter list.

// how would we use it with a list of args
let args = ["arg1", "arg2", "arg3", "arg4", "arg5"];
manyArgs(...args); // that's like saying spread the args contained in the list


// where else would we want to use the ... operator
// 1 we can use it to expand one list into another.
// example
let list1 = ["Aimable", "JeanLuc", "Uwase"];
let list2 = ["The names are the following", ...list1, "Thank you!"];
for (let item of list2) {
    console.log(item);
}
console.log(list2.join(", "));


// can we create a simple function to chck of the maximum number in the args provided to it
function max(...numbers) {
    // let max = numbers[0];
    let max = numbers[0];
    for (let num of numbers) {
        if (max < num) max = num;
    }
    return max;
}

console.log(max(1, 4, 0, 10, 3, 5, 2)); // -> 10
console.log(max(-1, -4, -10, -3, -5)); // -> -1
console.log(max()); // -> -undefined

// how else can we use the ...operator
// WE CAN USE IT ON OBJECTS
// we can use the ... operator to spread one object into another.
// consider the following example.

let amashuri = {
    secondarySchool: "Kagarama SS",
    primarySchool: "La promies",
    university: "African Leadership University",
};

// the ...amashuri spreads the properties and their value into the 'umwirondoro' object.
let umwirindoro = {
    name: "Aimable",
    secondName: "Nkurikiyimana",
    age: "23",
    ...amashuri,
    status: "unemployed",
    isMarried: false,
};

console.log(umwirindoro); // -> properties of amashuri and umwirondoro object.

// we could use the to combine both objects into one new as follows
// console.log({...umwirindoro, ...amashuri});

// little q: what happens when the objects happens to have some similar properties
// let's find out
let coordinates1 = {y: 21, x: 10};
let coordinates2 = {...coordinates1, x: 23, z: 45}; // apparently the last added in the two wins the place.
console.log(coordinates2);

//! the {...coordinates1, x: 23, z: 45} should not be confused with {coordinates1, x: 23, z: 45}
//! in which case the property coordinates1 is created with value of coordinates1 object.
//! that's not the same as expanding or spreading the properties in the another object
// coordinates1: {y: 21, x: 10}.


// OPTIONAL PROPERTIES.