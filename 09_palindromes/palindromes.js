const palindromes = function (string) { 
    return string
        .replace(/[^a-zA-Z0-9]+/g, '') // <<<<----
        .toLowerCase()
        .split('')
        .map((letter, index, string) => {  // <<<<----
            if (letter === string[string.length - 1 - index]) {
                return true;
            } else {
                return false;
            };
        })
        .every(item => item === true);  // <<<<----
};

// my solution has a chained return, which is positive (chain 'method' incorporation)
// but solution is waay better and simple
// -- it works with know tools, such as .filter() instead of .replace() (the regex)
// -- also it makes a comparison string to string with .reverse() instead of
//    letter with letter comparison (waay simpler and clean, and easy to read)
const solution = function(string) {
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    // clean string to an array of letters  
    const cleanString = string
        .toLowerCase()
        .split('')
        .filter(item => alphanumerical.includes(item))

    // compare clean string as string with reversed
    return cleanString.join('') === cleanString.reverse().join('');
}
// *i made some changes to solution to use less variables and lines of code



// Do not edit below this line
module.exports = palindromes;
