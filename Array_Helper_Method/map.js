var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var double = [];

for (var i = 0; i < num.length; i++) {
    double.push(num[i] * 2);
}
console.log(double)

var doubleNumber = num.map((number) => {
    return number * 2 // don't forget to return
})
console.log(doubleNumber)

var car = [
    { model: 'Buick', price: 'Cheper' },
    { model: 'Tata', price: 'Cheper' },
    { model: 'Camero', price: 'Expensive' }
];

let price = car.map((car) => {
    return car.price
})
console.log(price)