// CONCEPT: optional object and property access / OPTIONAL CHAINING. WITH THE "?." NOTATION

console.log() //
let obj = {
    username: "aimable", age: 23, sex: "male", name: 'BabuG',
    school: {primary: "la promise", secondary: "kagarama ss", university: undefined},
    printName: function() {
        console.log(username, 'aka', this.name)
    },
};

console.log(obj.school?.university);
obj.printName();

// one of the use cases is on methods.
// which would otherwise give errors when they were not defined.
// obj.printsName(); // error: TypeError: obj.printsName is not a function
obj.printsName?.(); // no error. (the missing method is handled graciously)
//! notice when used on methods the ? is not placed "obj'here'." but obj.printsName'here'.()

// this would work on other values as well.

let sample2 = {
    arrayProp: [0, 1, 2, 3],
}

console.log(sample2.arrayProp[2])
console.log(sample2.arrayProp?.[5]) // this graciuosly returns undefined because the element at index 5 is not in the array.

// The Main real use case of ?. is that it not only prevents you from accessing a non-existent prop but also non-object value
// the expression a?.b means the same as a.b when a isn't null or undefined

let a; // we first declare variable a, without declaring it the expression a?.b would throw a referenceError
// console.log(a.b); // throws error => TypeError: cannot read properties of undefined (reading 'b')
console.log(a?.b); // this handles a not being an object graciously.

// but how about REFERENCE ERROR..
// Reference Error is when you try to read non existing binding/variable.
// console.log(nonExistent?.age);
// console.log(obj?.b); // if obj were not declared as binding we get referenceError
//console.log(obja.b); // same case.
// conclusion: ?. doesn't protect you from ReferenceError. but it can protect you from typeError.
// i.e trying to access a missing object or prop.

// anothe useful case for ?. is trying to handle chaining when some might be undefined/null.
let data = {
    user: {
        name: "Aimable",
        age: 23,
        isMarried: false
    },
    address: {
        country: "Rwanda",
        province: "North",
        district: "Huye",
        city: "Ngoma",
    }
}

//! where would this be usefull...
// let's just assume later someone did sometihng that caused the data binding
// that was pointing to an obj to now be null, like data = null / undefined / or a number
// the code below would fail with errors and cause the program to crash
// if it wasn't for the use of '?.' notation each time we try to access the 'data' object.
// CONCLUSION: we should use the ?. on objects for safety and gracious handling of unexpected changes that would cause errors otherwise.

console.log(data?.user?.name);
console.log(data?.address?.cell);


// we could use it in checks a bit like this...
console.log()
if (data?.address?.village) {
    console.log("We have a village address");
}

if (data?.address?.cell ?? false) {
    console.log("We have a cell address");
}

// how could you check that using ??
// if could be written like this: (data?.address?.country ?? false) but that's verbose
if (data?.address?.country) {
    console.log(`We have country address: ${data?.address?.country}`);
}

// if we didnt use the ?. and we just had the variable data that doesn't reference to an object our code would have failed