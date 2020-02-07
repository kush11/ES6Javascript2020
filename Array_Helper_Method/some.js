var computers = [
    { name: 'Apple', ram: 16 },
    { name: 'Dell', ram: 4 },
    { name: 'Lenovo', ram: 8 }
];

var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;

for (var i = 0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false
    }
    else {
        onlySomeComputersCanRunProgram = true
    }
}
console.log('allComputersCanRunProgram :', allComputersCanRunProgram)
console.log('onlySomeComputersCanRunProgram :', onlySomeComputersCanRunProgram)

console.log(computers.some((computer) => { // some array function does or to all the data if any one data is true it will return true
    return computer.ram > 15
}))