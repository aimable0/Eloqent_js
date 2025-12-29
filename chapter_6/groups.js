/* A program that implements a Set */

class Group {

    // important to know:
    static name = "sample" // stored on the constructor
    id = "sample" // stored on the instance.

    constructor() {
        this.grp = [];

    }

    // the following method is stored only on the constructor and can't be accessed by an instance.
    static from(iterable) {
        let newGrp = new Group
        iterable.forEach(v => {
            if (!newGrp.has(v))
                newGrp.add(v);
        })
        return newGrp;
    }

    add(value) {
        if (!this.has(value))
            this.grp.push(value);
    }

    delete(value) {
        if (this.has(value))
            this.grp = this.grp.filter(x => x !== value);
    }

    has(value) {
        // version 1.
        // return Object.hasOwn(this.grp, value);

        // version 2.
        return this.grp.some(x => x === value);
    }
}

let sample = Group.from([1, 2, 3, 4, 1]);
console.log(sample);

// we should notice the difference between methods and props stored on instance and on constructor.
// and where to rightly access them...

// let sample0 = new Group();
// sample0.from([1, 2]); // Error: sample.from is not a function..
// let sample1 = Group.add(); // Error: Group.add is not a function..
