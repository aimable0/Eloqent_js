// a program that generates a random number with a given range 0 - max

class Random {
    #max; // this is per-instance prop.
    constructor(max) { // used to set props at time of creation.
        this.#max = max;
    }
    #name;
    getRandom() {
        console.log(Math.round(Math.random() * this.#max));
    }

    setName() {
        this.#name = 'Aimable';
    }

    printName() {
        // if setNames has not been called, this.name is undefined.
        this.setName();
        console.log(`My name is ${this.#name}`);
    }
}

let sample = new Random(100);
console.log(sample); // -> {}
sample.getRandom();
// sample.setName(); // -> Name: Aimable.
sample.printName(); // -> undefined.
