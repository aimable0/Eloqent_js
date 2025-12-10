let journal = [];
// [{event: [''], squirrel: false}]

function addEntry(events, squirrel) {
    journal.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "ice cream", "cauliflower", "lasagna", "touched tree", "brushed teeth"], false);
addEntry(["weekend", "cycling", "break", "peanuts", "beer"], true);

// display on screen.
// console.log(journal);

// create a two-by-two table for a specific event.
// let's evalute the relationship between work and squirrelness.

// we need to create a table (which will be an array the represents frequency table.)
// we will interpret indices as two-bit representation of two boolean variables
// that means we will convert the indice digit into a binary representation
// and the represantion will have only have two digits (1 or 0)
// and the leftmost digit will represent the squirelness (transformation)
// and rightmost digit (of the binary two-bit digit)
// one will mean false and zero otherwise.

// [      ]
//   ^ ^ ^
// 01 10 11

function createTable(event) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        if (!journal[i]['events'].includes(event)
            && !journal[i]['squirrel']) {
            table[0] += 1;
        } else if (!journal[i]['events'].includes(event)
            && journal[i]['squirrel']) {
            table[1] += 1;
        } else if (journal[i]['events'].includes(event)
            && !journal[i]['squirrel']) {
            table[2] += 1;
        } else {
            table[3] += 1;
        }
    }

    return table;
}

let freqTable = createTable('work');
console.log(freqTable);


// create a phi coefficient.
// 00 01, 10 11
function phi(table) {
    return table[3] * table[0] - table[2] * table[1] /
        Math.sqrt((table[2] + table[3]) *
                  (table[0] + table[1]) *
                  (table[1] + table[3]) *
                  (table[0] + table[2]));
} 

console.log(phi(freqTable));