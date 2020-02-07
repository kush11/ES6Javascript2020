var place = ['Delhi', 'Mumbai', 'Pune', 'Bangalore', 'Patna', 'Kolkata', 'Thane', 'Gujrath', 'Punjab'];

for (var i = 0; i < place.length; i++) {
    console.log('With for loop', place[i])
}

place.forEach((data) => { // ()=>{} it is a iterator function which is passed to the forEach function
    console.log('with forEach loop', data)
})

// sum of all number in array
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
var sum1 = 0;
function addNumber(number) {
    sum += number;
}

num.forEach(addNumber)

num1.forEach((number) => {
    sum1 += number
})

console.log(sum)
console.log(sum1)