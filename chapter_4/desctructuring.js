// CONCEPT: DESCTRUCTURING.
// this concept helps to better grasp elements in an array argument passed to a function.


function myFunc([param1, param2, param3, param4]) // we know the argument will be an array.
{
    console.log(param4);
    console.log(param3);
    console.log(param2);
    console.log(param1);
}
myFunc(["arg1", "arg2", "arg3", "arg4", "arg5", "arg6"]);

//! IMPORTANT NOTE:
//! that only works when the argument passed is explicitly list of arguments.
//! something like this would only treat the first 'arg1' as list (splits it)
// hence param1 would be the fist letter of the string.
myFunc("arg1", "arg2", "arg3", "arg4", "arg5", "arg6");// -> 1\n, g\n  ...

// this concept is also useful with object destructuring.
let infoDetails = {username: "aimable", age: 23, sex: "male", name: 'BabuG'};

// assuming you what the properties you are intersted in are called.
// you could use let and {prop} to get their values in an object.

let {age} = infoDetails; // eqiv to let age = infoDetails.age
let {sex} = infoDetails;
let {username} = infoDetails;
let {name} = infoDetails;
console.log(username);
console.log(sex);
console.log(age);
console.log(name); // linethrough indicates that the keyword 'name' is deprecated but that has nothing to do with the illustration...
