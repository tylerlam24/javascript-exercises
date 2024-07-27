const removeFromArray = function(array, ...numToKeep) {
    return array.filter(val => !numToKeep.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
