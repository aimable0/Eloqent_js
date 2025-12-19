// create something that would group arrays as follows
//“console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
// → [{name: false, count: 2}, {name: true, count: 3}]”

// the ƒ will recieve an array and function as arguments.

function groupItems(array, groupName) {
    let collection = [];
    for (let item of array) {
        let name = groupName(item); // takes an item and returns its fitting group 'name' or category.
        let known = collection.find(a => a.name === name); // check whether that category is new or otherwise.
        // find loops through the elements of an array and returns the first one where the function returns true
        // it returns undefined when it has no matching element.
        if (!known) {
            collection.push({name, count: 1}); // add the category and initiate it.
        } else {
            known.count += 1; // increment the tot number of items in the category .
        }
    }
    return collection;
}

console.log(groupItems([1, 2, 3, 4, 5, 6], (n) => {
    if (n % 2 == 0) return "even";
    return "odd";
}));

