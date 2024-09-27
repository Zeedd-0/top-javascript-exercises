const reverseString = function(string) {
    const spelled = string.split('');
    const reversedSpelled = [];
    for (const letter of spelled) {
        reversedSpelled.unshift(letter);
    }
    return reversedSpelled.join('');
};


// solution used .reverse
// and got it all in one line
// more readable and clean
const reverseString = function (string) {
    return string.split("").reverse().join("");
};


// Do not edit below this line
module.exports = reverseString;
