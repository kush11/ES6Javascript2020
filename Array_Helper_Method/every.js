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

console.log(computers.every((computer) => { // every array function does and to all the data if any one data is false it will return false
    return computer.ram > 16
}))