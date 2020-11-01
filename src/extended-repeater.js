const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    let {
        repeatTimes,
        separator,
        addition,
        additionRepeatTimes,
        additionSeparator
    } = options;

    repeatTimes = repeatTimes || 1;
    separator = separator || '+';
    additionRepeatTimes = additionRepeatTimes || 1;
    additionSeparator = additionSeparator || '|';

    let testArr = [];
    let secondArr;
    for (let i = 1; i <= repeatTimes; i++) {
        secondArr = [];
        for (let j = 1; j <= additionRepeatTimes; j++) {
            secondArr.push(addition === null ? String(addition) : addition);
        }
        testArr.push(str + secondArr.join(additionSeparator));
    }

    return testArr.join(separator);
};