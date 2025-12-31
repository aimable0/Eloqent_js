/* An Illustratin of functions methods and this */

class Greet {
    constructor(userName) {
        this.userName = userName;
    }

    greet() {
        console.log(`Hello, ${this.userName}!\n`,);
    }
}

// trap hole in my logic.
let user = {
    greet: new Greet("Karake").greet,
};

// #.1 To understand how 'this' works, lets examine how the following code behavs.

// test 1.
// using the following code we would expect ... 'Hello, Karake' --due to faulty logic! :) ...
user.greet(); // -> 'Hello, undefined';
// this is because the 'this' object value (being used in ƒ greet() defined in class Greet) -
// -is determined by the scope or context in which the method is being invoked.
// in this case, the context is 'user' object, hence undefined since user object has no 'userName' property.


// test 2
let user_0 = {
    greet: new Greet("Karake").greet,
    userName: "Aimable",
}
user_0.greet(); // -> "Hello, Aimable"


// test 3.
let greetKarake = new Greet("Karake");
greetKarake.greet() // -> "Hello, Karake!" .. in this case 'this' is {userName: "Karake"}

// test 4.
let greetManzi = new Greet("Manzi").greet;
// greetManzi(); // this will have issues (error) due to the usage of 'this'
// in this context the 'this' is not defined, so there should be no reference to 'this' (it's literally unknown)..
// hence we get an error from trying to read 'undefined.Username'

// we can tweak this function to work by manually providing the 'this' object value.
greetManzi.call({userName: 'Manzi'}); // -> "Hello, Manzi!"
// in fact, this is something we can do even with standalone functions (not methods of objects)

// SPECIFYING THIS OBJECT.
// We can specify directly the 'this' object value and pass it to the function using .call (function method).
function sayHi() {
    console.log(`Hy, ${this.user}`);
}
let data = {
    user: "Jean",
}
// what to expect on different usage:
sayHi.call(data); // -> Hy, jean
sayHi.call({aimable: "aimable"}); // undefined
sayHi.call({user: "Aimable", age: 1}); // 'Hy, Aimable'
sayHi.call('Aimable'); // undefined

// remember not to do this Function.call([this], [function]) -> this is not how we use call.
// its important also to know that we can pass other expected arguments in .call()
// as we would to any normal function called without the .call() method.
// ex: lets say ƒ sayHi had an argument for time.
// we could have done something like this
// sayHi.call([thisObject], [timeargument])
// nothing new ... its just that this time we have to pass the 'this' object as first argument (to be referenced)