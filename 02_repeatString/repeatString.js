const repeatString = function(text, number) {
    let result = '';
    if (number >= 0) {
        for (let i = 0; i < number; i++){
            result += text;
        };
    } else {
        result += 'ERROR';
    };
    return result;
};

// solution is clean and better:
// once everything is in a function, can use return to break and return a value
// even the variables have a better name
const solution = function (word, times) {
    if (times < 0) return "ERROR";
    let string = "";
    for (let i = 0; i < times; i++) {
      string += word;
    }
    return string;
};


// Do not edit below this line
module.exports = repeatString;
