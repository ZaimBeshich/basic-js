const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let bigArr = [].concat.apply([], matrix);
    let counter = bigArr.filter(item => item == '^^');
    return counter.length;
};