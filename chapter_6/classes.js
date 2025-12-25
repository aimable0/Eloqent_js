// this is how a class usually functions - behind the scenes

// let's try to create a car manufacturere :)
function Car(type) {
    this.type = type;
}

// let's add some functionality to it
Car.prototype.move = function(direction) {
    console.log(`This ${this.type} is moving ${direction}`);
};

Car.prototype.stop = function() {
    console.log(`This ${this.type} is stopping...`);
};

// now we can see that methods defined for this type live on the Constructor function's prototype property.
// this means that methods are:
// - create once
// - shared with all objects create using this constructor function.
// note: the constructor prototype property has also the prototype it used creating instances.

// the next thing we would have to do would be then
// to create a car.
let carInstance = new Car('Benz');
console.log(Object.getPrototypeOf(carInstance));
console.log(Object.getPrototypeOf(carInstance) == Car.prototype); // -> true
console.log(Car.prototype); // this is an object that contains the methods.
console.log(carInstance);
carInstance.move('left');
carInstance.stop();


// fact: all non-arrow functions start with a prototype property holding an empty object.
console.log();
function greet(user) {
    console.log(`Hello, ${user}`);
}
console.log(greet.prototype) // -> {}


// using the 'modern js' class
// we can do this (bundle all the methods and functions above to create an object)

class Vehicle {

    speed = 180; // live on instance (they are per-instance).
    constructor(type) {
        this.type = type;
    }

    // methods (live on prototype)
    move (direction) {
    console.log(`This ${this.type} is moving ${direction}`);
    }

    stop() {
    console.log(`This ${this.type} is stopping...`);
    }
}

console.log("\n -- using CLASS --\n");
let newVehicleInstance = new Vehicle('COROLLA');
console.log(newVehicleInstance);
newVehicleInstance.move('right');
newVehicleInstance.stop();


// we can also use constructors in expression where they don't creae a binding like Car in our previous exmpale
// but creates an instance (or rather value) of the constructor

let sampleObj = new class {
    // we define methods and props (if we want) here
    greet (user) {
        console.log(`Hy, ${user}`);
    }
}
sampleObj.greet("Levis");
