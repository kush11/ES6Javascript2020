function doubleChar(str) {
    var data = str.split('');
    var result = data.map(da => da + da);
    return result.join("")
}
console.log(doubleChar('hello'))