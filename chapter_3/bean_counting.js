/* A function that counts 'B's in a string. */
function countBs(string) {
    let count = 0;
    for (let i = 0; i < string.length; i++)
        if (string[i] === 'B') count++;
    return count;
}

/* A function that returns the total number of occurences of certain character in the string*/
function countChar(string, char) {
    let count = 0;
    for (let i = 0; i < string.length; i++)
        if (string[i] === char) count++;
    return count;
}

// tests countBs
let occurencesB = countBs("aimable");
console.log(occurencesB); // -> 0
occurencesB = countBs("aimaBle");
console.log(occurencesB); // -> 1

// test countChar
let charOccurence = countChar("aimable", 'a');
console.log(charOccurence); // -> 2
