const points = [
    [4, 5],
    [10, 1],
    [0, 40]
]
// convert the points array to 
// const points = [
//     { x: 4, y: 5 },
//     { x: 10, y: 1 },
//     { x: 0, y: 40 }
// ]

var result1 = points.map((pair) => {
    return { x: pair[0], y: pair[1] }
})

var result = points.map(([x, y]) => {
    return { x, y }
})

// multiply number array with 2 to each element and return 
const numbers = [1, 2, 3];
function double([a, b, c]) {
    return [a * 2, b * 2, c * 2];
}
console.log('double', double([1, 2, 3]));
console.log('result', result)
console.log('result1', result1)