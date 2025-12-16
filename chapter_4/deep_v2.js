function deepEqual(object1, object2) {
    //! we will handle arrays later..
    // tests.
    console.log(object1);
    console.log(object2);
    console.log();

    if (Object.keys(object1).length == 0 && Object.keys(object1).length == 0) return true;
    else if (Object.keys(object1).length !== Object.keys(object2).length) return false;
    else if (Object.keys(object1).sort()[0] !== Object.keys(object2).sort()[0]) return false;
    if (typeof object1[`${Object.keys(object1).sort()[0]}`] === 'object') {
        let isEqual =  deepEqual(object1[`${Object.keys(object1).sort()[0]}`], object2[`${Object.keys(object2).sort()[0]}`]);
        if (!isEqual) return false;

        delete object1[`${Object.keys(object1).sort()[0]}`];
        delete object2[`${Object.keys(object2).sort()[0]}`];

        console.log("Portion of object1 remaining after I return:", object1);
        console.log("Portion of objects remaining after I return:", object2);
        return deepEqual(object1, object2);
    } else {
        if (object1[`${Object.keys(object1).sort()[0]}`] != object2[`${Object.keys(object2).sort()[0]}`]) return false;
        delete object1[`${Object.keys(object1).sort()[0]}`];
        delete object2[`${Object.keys(object2).sort()[0]}`];
        return deepEqual(object1, object2);
    }
}

// how would we handle booleans and arrays as values.

let object1 = {value: {values: false}, name: "Anages", sex: "female", drinksWater: true, aobj: {name: 1, school: {name: 'la promise', secondary: 'kagarama'}}};
let object2 = {value: {values: false}, name: "Anages", sex: "female", drinksWater: true, aobj: {name: 1, school: {name: 'laa promise', secondary: 'kagarama'}}};
console.log(deepEqual(object1, object2));
// console.log(object1);
// console.log(object2);
