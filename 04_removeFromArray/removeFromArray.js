const removeFromArray = function(primaryArr, ...toFilter) {
    const filteredArr = primaryArr.slice(0);

    for (let i = filteredArr.length - 1; i >= 0; i--){
        for (const item of toFilter) {
            if (filteredArr.at(i) === item) {
                filteredArr.splice(i, 1);
                break;
            };
        };
    };
    return filteredArr;
};

// solution is much simpler an clear
//  . since it does not have a bunch of loops
//  . uses arrow functions
//  . and uses array built-in functions
// only push items to new array if item is not included in arguments
//  . (!args.includes(item))
//  . .forEach() and .includes()
const solutionEasy = function (array, ...args) {
    const newArray = [];
    array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item);
        }
    });
    return newArray;
};
// only filter which is not
//  . !args.includes(val)
//  . .filter() and .includes()
const solutionAdv = function(array, ...args) {
    return array.filter(val => !args.includes(val))
}


// trying to replicate solution without looking
const replicateEsy = function(primaryArr, ...toFilter) {
    const filteredArr = [];
    primaryArr.forEach((item) => {
        toFilter.includes(item) ? 0 : filteredArr.push(item);
    });
    return filteredArr;
};
const replicateAdv = function(primaryArr, ...toFilter) {
    return primaryArr.filter(item => !toFilter.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
