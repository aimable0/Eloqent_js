// private properties: these are properties that can't be access outside of the class

class Computer {
    // label = 'Uwase';
    constructor(name) {
        this.name = name;
        this.label = name;
        console.log('executed this ..2');
        console.log("now label is:", this.label);
    }

    #model = this.setMode(this.name);
    // sometihng like this.name wouldn't give the the this.name set in the constructor.
    // how can I access it ?
    // maybe this is where we need getters and setters.
    // description = `This is a ${this.#model} computer`;



    // here we should use setters and getters.
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
let sampleComp = new Computer('Macbook Air');
console.log();
// sampleComp.setMode();









// ----- POLYMORPHISM ------------
console.log('\n\n');
// how would some functions handle differenty types of objects.

// let's find out.

console.log([1, 2].toString());
console.log(Object.prototype.toString());
