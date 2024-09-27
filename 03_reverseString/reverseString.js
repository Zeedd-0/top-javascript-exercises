const reverseString = function(string) {
    const spelled = string.split('');
    const reversedSpelled = [];
    for (const letter of spelled) {
        reversedSpelled.unshift(letter);
    }
    return reversedSpelled.join('');
};

// Do not edit below this line
module.exports = reverseString;
