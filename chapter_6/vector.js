/* A class that represents a vector */

class Vec {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    plus(vector) {
        return new Vec(vector.x + this.x, vector.y + this.y);
    }

    minus(vector) {
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    }
}

let vec1 = new Vec(1, 2);
console.log(vec1.x === 1);
console.log(vec1.y === 2);


// (1, 2).plus(3, 4) → expected result vector (4, 6)
let vec2 = vec1.plus(new Vec(3, 4));
console.log(vec2.x === 4);
console.log(vec2.y === 6);

// test immutability
console.log(vec1.x === 1);
console.log(vec1.y === 2);

// (-2, -4).plus(-3, 1) → expected (-5, -3)
let vec3 = new Vec(-2, -4);
let vec4 = vec3.plus(new Vec(-3, 1));
console.log(vec4.x === -5);
console.log(vec4.y === -3);

// TEST MINUS
// (5, 7).minus(2, 3) → expected (3, 4)
let vec = new Vec(5, 7);
console.log(vec.minus(new Vec(2, 3)));

// (1, 1).minus(4, 6) → expected (-3, -5)
vec = new Vec(1, 1);
console.log(vec.minus(new Vec(4, 6)));

// (3, -2).minus(0, 0) → expected (3, -2)
vec = new Vec(3, -2);
console.log(vec.minus(new Vec(0, 0)));

// Chain operation
// (1, 2).plus(3, 4).minus(1, 1) → expected (3, 5)
vec = new Vec(1, 2);
console.log(vec.plus(new Vec(3, 4)).minus(new Vec(1, 1)));

// TEST LENGTH.
console.log(vec.length);
