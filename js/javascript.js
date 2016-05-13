function chars_num(str) {
    var chars = {};
    str.replace(/\S/g, function (l) {chars[l] = (isNaN(chars[l]) ? 1 : chars[l] + 1);});
    return chars;
}
console.log(chars_num("Test"));