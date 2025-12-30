// create an object that recieves an array of numbers
// each time its method (name it anything) called it returns an object gives next value and wether we still have number or not



class Iterable {
    constructor(numbers) {
        this.numbers = numbers
    }

    [Symbol.iterator]() {
        let next = () => {
            let value, done;
            if (this.numbers.length > 0) {
                value = this.numbers.pop();
                done = false;
                return {value, done};
            } else {
                value = this.numbers.pop();
                done = true;
                return {value, done};
            }
        }
        return {next};
    }
}

let iterator = new Iterable([1, 2, 3, 4, 5, 6]);
for (let el of iterator) {
    console.log(el);
}