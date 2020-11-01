const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw new Error();
    }
    const answ = [];
    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--double-next':
                if (i < arr.length - 1) answ.push(arr[i + 1]);
                break;
            case '--double-prev':
                if (i && arr[i - 2] !== '--discard-next') answ.push(arr[i - 1]);
                break;
            case '--discard-next':
                i++;
                break;
            case '--discard-prev':
                if (answ.length && arr[i - 2] !== '--discard-next') answ.pop();
                break;

            default:
                answ.push(arr[i]);
        }
    }
    return answ;
};