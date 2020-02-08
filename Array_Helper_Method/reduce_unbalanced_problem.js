// with reducer array helper
function balanceParameter(string) {
    return !string.split("").reduce((previous, char) => {
        if (previous < 0) return previous;
        if (char === '(') return ++previous;
        if (char === ')') return --previous;
        return previous;
    }, 0)
}

// with normal for loop
function balanceParameter(string) {
    var data = string.split("");
    let sum = 0;
    for (i = 0; i < data.length; i++) {
        if (sum < 0) return !sum
        if (data[i] === '(') {
            ++sum
        }
        if (data[i] === ')') {
            --sum
        }
    }
    return !sum
}
var input = '())('
console.log(balanceParameter(input));


// Use the 'reduce' helper to create an object that tallies the number of sitting and standing desks.  
// The object returned should have the form '{ sitting: 3, standing: 2 }'.  
// The initial value has been provided to you.
var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
];

var deskTypes = desks.reduce(function (prev, desk) {
    prev.sitting += desk.type === 'sitting'
    prev.standing += desk.type === 'standing'
    return prev
}, { sitting: 0, standing: 0 });
console.log(deskTypes);

function unique(array) {
    return array.reduce((prev, data) => {
        // var rr = array.find(da=> {return da==data})
        // console.log(rr)
        prev.push(array.find(da=>da==data))
        return prev
    }, [])
}
console.log(unique([1, 1, 2, 3, 4, 4]))