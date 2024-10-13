const fibonacci = function(num) {
    if (num < 0) return 'OOPS';
    if (num == 0) return 0;

    const fiboSerie = [1, 1];
    for (i = 2; i < parseInt(num); i++) {
        let newNum = fiboSerie.at(-1) + fiboSerie.at(-2);
        fiboSerie.push(newNum);
    };
    return fiboSerie.at(-1);
}; // 0.544 seconds

// solution is quite same as mine
// -- it has a parseInt(num) as an initial and separate conditional
// -- instead of using an array as i did, it has
//    two variables that are updated at each iteration
//    * it gives the array approach at the end of the solution
// dont know which one is better
// -- time wise, my solution is faster than the solution's two methods
//    memory wise, i dont know how to verify it

const solution = function(countArg) {
    // checks argument's type and makes sure we use 
    // a number throughout rest of function.
    let count
    if (typeof countArg !== 'number') {
        count = parseInt(countArg)
    } else {
        count = countArg
    }

    if (count < 0) return "OOPS";
    if (count == 0) return 0;

    // one way with two variables  // 0.651 seconds
    // let firstPrev = 1;
    // let secondPrev = 0;

    // for (let i = 2; i <= count; i++) {
    //     let current = firstPrev + secondPrev;
    //     secondPrev = firstPrev;
    //     firstPrev = current;
    // }

    // return firstPrev;

    // other way with array approach // 0.564 seconds
    const fib = [0, 1];
    for (let i = 2; i <= count; i++) {
       fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[count];

};

// Do not edit below this line
module.exports = fibonacci;
