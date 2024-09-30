const leapYears = function(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0){
            return false;
        } return true;
    } return false;
};


// solution given is better beacuse it makes a single
// if rule against two of mine
// i got close to a one rule solution, but couldn't see
// the negative (!) making the rule work, so i made two rules
const solution = function (year) {
    const isYearDivisibleByFour = year % 4 === 0;
    const isCentury = year % 100 === 0;
    const isYearDivisibleByFourHundred = year % 400 === 0;
  
    if (
      isYearDivisibleByFour &&
      (!isCentury || isYearDivisibleByFourHundred)
    ) {
      return true;
    } else {
      return false;
    }
  };


// Do not edit below this line
module.exports = leapYears;
