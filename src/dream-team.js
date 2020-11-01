const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let clearArr = members.filter(item => typeof item == "string")
        .map(item => item.split("").filter(prop => prop !== " ").join(""))
        .map(item => item[0].toUpperCase())
    return clearArr.sort().join("");
};