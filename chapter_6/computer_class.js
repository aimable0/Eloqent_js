//  SIMPLE COMPUTER CLASS model.

// using setters and getters
class Computer {
    constructor(name, manufacturer, year) {
        this.name = name;
        this.manufacturer = manufacturer;
        this.year = year;
    }

    // this kind of code where the prop and method both have same name causes stack overflow (calling same function repeatedly)
    // set name(value) {
    //     this.name = value;
    // }


    // notice this is not a function that I can call outside of this class.
    // this are known as hidden method calls.
    // can't try to call them outside of this scope
    // we can have some access to their function but using their names as properties.
    // this setter name must be differnt from the prop it's setting otherwise we get infinite calls.
    set compName(value) {
        this.name = value
    }

    get description() {
        return `This is ${this.manufacturer}'s ${this.name} released in ${this.year}.`;
    }
}

// initialization
let comp = new Computer('MacBook Pro', 'Apple', '2021');
console.log(comp);
// comp.name = 'MacBook Air'; // explore why this is causing maximum Call stck to be exceeded
// reason: check in code
comp.compName = 'Macbook Air'; // something like this com.Name(value) would fail. with error: comp.Name(is not a function)
console.log(comp); // -> {name: 'MacBook Air' ...}

// getter
console.log(comp.description);
