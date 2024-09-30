const convertToCelsius = function(temp) {
  return ((temp - 32) * (5/9)).toFixed(1) * 1;
};

const convertToFahrenheit = function(temp) {
    return (temp * (9/5) + 32).toFixed(1) * 1;
};


// solution is different, don't know if is better
// it uses Math.round()
// i used .toFixed()
const solutionToCelsius = function (fahrenheit) {
  return Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
};

const solutionToFahrenheit = function (celsius) {
  return Math.round(((celsius * 9) / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
