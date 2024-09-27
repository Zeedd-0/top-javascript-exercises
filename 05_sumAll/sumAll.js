const sumAll = function(n1, n2) {
    let sum = 0;
    if (
        testNumber(n1, n2) &&
        testInteger(n1, n2) &&
        testPositive(n1, n2)) {
    } else {
        return 'ERROR';
    }
    let lowerN = Math.min(n1, n2);
    let higherN = Math.max(n1, n2);
    for (i = lowerN; i <= higherN; i++) {
        sum += i;
    }
    return sum;
};

function testInteger(n1, n2) {
    if (n1 === Math.floor(n1) && n2 === Math.floor(n2)) return 1;
}

function testNumber(n1, n2) {
    if (typeof n1 === 'number' && typeof n2 === 'number') return 1;
}

function testPositive(n1, n2) {
    if (n1 >= 0 && n2 >= 0) return 1;
}


// solution is simpler and clearer
// . use of functions like .isIntger
// . not using loop to not complicate it (just 2 arguments)
// . clever way to test min (lower) and max (higher)
//      . use of simple if
//      . also alternative with array deconstruction
const solution = function (min, max) {
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
    if (min < 0 || max < 0) return "ERROR";
    if (min > max) {
      const temp = min;
      min = max;
      max = temp;
    }
  
    // An alternative way to swap the values of min and max like above is to use the array destructuring syntax.
    // Here's an optional article on it: https://www.freecodecamp.org/news/array-destructuring-in-es6-30e398f21d10/
    // if (min > max) [min, max] = [max, min];
    
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
    return sum;
  };


// Do not edit below this line
module.exports = sumAll;
