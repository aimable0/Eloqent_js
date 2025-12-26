// private properties: these are properties that can't be access outside of the class

// class order of execution when a new insance is created.
// The engine does this:
	// 1.	Allocate a new object.
	// 2.	Bind this.
	// 3.	Initialize instance fields (top to bottom)
// → returnsUndefined = this.returnUndefined(this.name)
	// 4.	Execute the constructor body.
class Computer {
    // label = 'Uwase';
    // when new is instance is created constructor function is runs later despite being written first in code order.
    // if any instance field initialization tries to get its value using a function that relies on properties set by constructor the values will be undefined.
    // since instance initializatio happens before calling constructor function (executing its body)
    // example consider the follwing case:
    returnsUndefined = this.returnUndefined(this.name); // this field is also known as instance field.
    // note: (this run before constructor).

    // example of stale derived state.
    returnUndefined() {
        console.log(`This.name is ${this.name}`);
        return this.name; // undefined if this happens to be called before constructore (moment of creating fresh instance)
    }

    constructor(name) {
        this.name = name;
        this.label = name;
        // console.log('executed this ..2'); // tests
        // console.log("now label is:", this.label); // test.
    }

    // sometihng like this.name wouldn't give the the this.name set in the constructor at the time of creation.
    // how can I access it ?: this is where we need getters and setters.
    // description = `This is a ${this.#model} computer`;

    // here we should use setters and getters.
    // concept: computed once vs computed on access.
    setMode() {
        console.log("executed this.. 1");
        console.log('at this time label is:', this.label);
        console.log("label is", this.label) // -> undefined.
        // if (['Macbook Pro', 'Macbook Air'].includes(this.name)) {
        //     return 'Mac';
        // }
        // else {
        //     return 'PC';
        // }
    }
}
// let's try to access it outside
let sampleComp = new Computer('Macbook Air'); // this will have this line run 'returnsUndefined = this.returnUndefined(this.name);' before the constructor function is called.
// hence returnUndefined() will be called at the time when this.name has not been set by the constructor. hence print a string with undefined this.name.

// this has the follwing effects..
console.log();

// -> effect 1:
let value = sampleComp.returnsUndefined; // vaue: undefined, since the constructor set the this.name later.
console.log(value == undefined); // true.
// console.log(sampleComp.returnUndefined()); // re-run it this time it will print a valid value
sampleComp.returnUndefined(); // this doesn't cause a rebuild. it only call that specific function.
// hence even after re-running this function with valid this.name the property 'returnsUndefined' will not be reassigne a new value ( it will still hold undefined) .. it will still hold the original value given to it at time of instance creation.
// to have it assigned a new value we will need setters.

// -> effect 2:
value = sampleComp.returnsUndefined // trying to get it again doesn't trigger the function that returns the value it stores to run again (one might do it hoping it gets a new value since at this time this.name has been initialized), it's ran once, when the property was being initialized. so this line will simply return the value undefined.

console.log(`value === undefined : ${value === undefined}`); // true.
value = sampleComp.returnUndefined();
console.log(value) // valid name. because the function returns this.type.
// console.log(sampleComp.returnsUndefined); // undefined
// sampleComp.setMode();
