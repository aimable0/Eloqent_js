myName = 'aimable\'';

console.log(myName);
console.log("A newline character is written like \"\\n\".");
console.log('a' < 'z');
console.log('a' < 'A');
console.log(NaN != NaN);


noValue1 = undefined;
noValue2 = null;
console.log(noValue1);
console.log(noValue2);
console.log(true == 1);
console.log(null == undefined);
console.log("");
// normal comparison that does some type conversion ==
// strict comparison that doesn't do type conversion ===

// null and undefined both mean empty value or no value (though they themselves are values)


// --- LOGICAL OPERATORS -----

// logical operators && ||
// they actually do return values (original left hand value or right hand value),
// depending on which value can be converted to true.

myAge = 24 || 21;
console.log(myAge);
myAge = false || true;
console.log(myAge);
myAge = true || false;
console.log(myAge);

// example usecase
// assume we are retrieving some data from the db
// we store it in the variable data, but data can be null or empty if no data retrieved
// case 1
data = "Data recieved"; // data stores the data received from database.
retrievedData = data || "empty data"; // in this case the string 'empty data' is a fall back default value in case data is something like null
console.log(retrievedData);

// that above represents this..
if (data == null) {
    retrievedData = "empty data";
} else {
    retrievedData = data;
}

// note that in such cases, 0, NaN, and "" count as false.
// therefore eventhoug data variable had stored a "" in it it would be still counted as false
// and the default value would be assigned to retrievedData.

// the ?? operator
// this is quite the same as || but this always returns the left hand value (even when its false or can count as false)
// UNLESS the value on the left hand is null or undefined,
console.log(0 ?? 100); //-> 0
console.log(null ?? 4); // -> 4
console.log(undefined ?? 5) // -> 5
console.log(undefined ?? null) // -> null
console.log(false ?? true) // -> false


// short-circuiting
age = 20;

// in the case below age-- expression will be changed
// and its true because numbers other than 0 count as true
1 > 4 || age--;
console.log(age);

// in this case short-circuit will prevent us from running the epxression age--
// because 1 < 4 is already true. no more need for further evaluation of the right-hand express
1 < 4 || age--;
console.log(age);

"aimable" // an expression
"aimable"; // a statement
// statements and expression may have side effects.
myGender = "female" +
"male";
console.log(myGender);
