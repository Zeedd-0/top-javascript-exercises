const add = function(a, b) {
	if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    return 'ERROR';
  } else {
    return a * 1 + b * 1;
  }
};

const subtract = function(a, b) {
	if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) {
    return 'ERROR';
  } else {
    return a * 1 - b * 1;
  }	
};

const sum = function(arr) {
  if (!arr.length) return 0;
  return arr
      .reduce((sum, cnum) => {
          if (isNaN(parseFloat(cnum))) return 'ERROR';
          return sum + cnum;
      }, 0);
};

const multiply = function(arr) {
  if (!arr.length) return 0;
  return arr
      .reduce((total, cnum) => {
          if (isNaN(parseFloat(cnum))) return 'ERROR';
          return total * cnum;
      }, 1);
};

const power = function(a, b) {
  if (isNaN(parseFloat(a)) || isNaN(parseFloat(b))) return 'ERROR';
  return a ** b;
  // could have used build-in function:
  // return Math.pow(a,b);
};

const factorial = function(a) {
  let total = 1;
  // for let total = 1; in case of a = 0
  // solution used a conditional, but since it is used only for one case
  // -- i think my solution is better   
  for (let i = a; i > 0; i--) {
      total *= i;
  }
  return total;
};

// in all functions, I made a number and empty array validation, and also string to number transformation
// thats why mine is more complex
// but, fundamentally, the solution is the same
// in addition, there is some differences that is pointed out

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
