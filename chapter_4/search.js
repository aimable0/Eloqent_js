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

function searchEvent(event) {
    for (let i = 0; i < journal.length; i++) {
        if (journal[i]['events'].includes(event)) return true;
        // long way to search for an event:
        // for (let j = 0; j < journal[i]['events'].length; j++)
        //     if (event == journal[i]['events'][j])
        //     return true;
    }
    return false;
}
console.log(searchEvent('pizza'));

// we could be tempted to search for an element using 'in' as follows
// console.log('weekend' in ['weekend', 'cycling', 'break', 'peanuts']); // -> false -- hmm
// console.log(2 in ['weekend', 'cycling', 'break', 'peanuts']); // -> true -- hm wait what ?
// console.log(8 in [1, 2, 3, 4, 8]) // -> false; bcz in checks if something is a property of a certain object

// // the right way to search for an element is to use .includes('target')
// console.log(['weekend', 'cycling', 'break', 'peanuts'].includes('cycling')); // -> true

