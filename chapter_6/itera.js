// converting the list object data structure (from chap 4) into a class.
class List {
    constructor(value, rest) {
        this.value = value;
        this.rest = rest; // rest is a List instance itself.
    }

    get length() {
        return 1 + (this.rest ? this.rest.length: 0);
    }

    static fromArray(array) {
        let result = null;
        for (let i = array.length - 1; i >= 0; i--) {
            result = new this(array[i], result);
        }
        return result;
    }
}

// List iterator.
// how can me some DS an iterable ?
// 1. we need a specific method on the DS that the for/of is expecting
// 2. we need the actual iterator
class Iterator {
    constructor(list) {
        this.list = list; // a List instance.
    }

    next() {
        let done = false;
        if (this.list == null)
            return {done: true};

        let value = this.list.value;
        this.list = this.list.rest;
        return {value, done};
    }
}

List.prototype[Symbol.iterator] = function () {
    return new Iterator(this);
    // a more verbose version I had before was like this
    // return new Iterator(new List(this.value, this.rest));
    // it works but creates a new unnecessary list instance.
}


let list = List.fromArray([1, 2, 3, 4]);
for (let el of list) {
    console.log("val:", el);
}

// test (on lower manual level)
let iterator = list[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
