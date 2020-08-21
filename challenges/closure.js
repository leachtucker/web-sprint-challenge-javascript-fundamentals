// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
    console.log(external);
    const internal = "Hello! I'm inside myFunction!";

    function nestedFunction() {
        console.log(internal);
    };
    nestedFunction();
}
myFunction();

// Explanation:
// Due to lexical scoping (all inner level can access their outer levels), the nestedFunction can access its parent's function variable 'internal'. The practice of using this principle in nested functions for counters and such is called closure.

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(param) {
    let counter = 0;

    function add(num1) {
        counter += num1;
    }
    // Summation
    for (let i = 1; i <= param; i++) {
        add(i);
    }
    return counter;
}

console.log(summation(5));