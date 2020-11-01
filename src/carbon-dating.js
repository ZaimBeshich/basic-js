const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;


module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== String) {
        return false;
    } else if (sampleActivity < 1 || sampleActivity > 15) {
        return false;
    } else {
        let num = 0.693;
        let answ = Math.cail(Math.log(MODERN_ACTIVITY / sampleActivity) / (num / HALF_LIFE_PERIOD));
        return answ;
    }
};