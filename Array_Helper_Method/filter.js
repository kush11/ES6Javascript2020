var product = [
    { name: 'Cucumber', type: 'vegitable' },
    { name: 'Tomato', type: 'vegitable' },
    { name: 'Apple', type: 'fruits' },
    { name: 'Onion', type: 'vegitable' },
    { name: 'Banana', type: 'fruits' }
];

var filterArray = [];

for (var i = 0; i < product.length; i++) {
    if (product[i].type === 'fruits') {
        filterArray.push(product[i])
    }
    // console.log(product[i].type)
}
console.log(filterArray)