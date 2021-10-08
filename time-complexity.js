const {performance} = require('perf_hooks');

// a slower algo because the number of operations grows with the argument
// operations
// 1. n additions
// 2. n assignments

//O(n) - number of operations is bounded by a multiple of n (e.g. 10n)

// function addUpto(n) {
//     let total = 0;
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }



// O(1) - always three operations

// a faster algo and efficient
// operations
// 1. multiplication
// 2. addition
// 3. division

function addUpto(n) {
    return  n * (n + 1) / 2
}

// performance.now() measures speed since the document was created
const t1 = performance.now()
addUpto(1000000000);
let t2 = performance.now();
//varies
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);


function countUpAndDown(n) {
    console.log("Going up!");

    // O(n)
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top! \nGoing down...");

    //O(n)
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}

function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}