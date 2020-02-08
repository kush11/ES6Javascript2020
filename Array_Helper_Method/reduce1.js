var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'pink' },
    { color: 'black' }
]

var result = primaryColors.reduce((accumulator, primaryColor) => {
    accumulator.push(primaryColor.color)
    return accumulator
}, []);

console.log(result)
