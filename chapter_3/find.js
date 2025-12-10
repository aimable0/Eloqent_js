/* use recursion to create a function that given a number
 tries to find a sequence of additions of 5 and multiplications of 3
 that produces that number starting from 1.
 */

// book solution
function findSolution(target) {
    function find(current, history) {
        if (current == target) {
            return history;
        } else if (current > target) {
            return null;
        } else {
            return find(current + 5, `(${history} + 5)`) ??
                   find(current * 3, `(${history} * 3)`);
        }
    }
    return find(1, "1");
}

console.log(findSolution(32));


// my solution
// start with a simple solution that  checks whether we can have a possible sequence or not
// key players: target and current_total
const isSequencePossible = function(target) {
    let current = 1;
    function checkAgainstTarget(current, target) {
        if (current == target) {
            return true;
        }
        else if (current > target) {
            return null;
        }
    }

    while(true) {
        current *= 3;
        let found = checkAgainstTarget(current, target);
        if (found == true)
            return true;
        else if (found == null)
            return checkAgainstTarget(current *= 3, target) 
    }
}