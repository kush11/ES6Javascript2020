// generator is a function which can enter and exit multiple times

function* work() {
    const status = yield 'started'
    const workPending = yield 'PendingWork'
    return [status, workPending];
}

const gen = work();
console.log(gen.next('start'))
console.log(gen.next('completed'))
console.log(gen.next('completed'))

function* colors(){
    yield 'red';
    yield 'green';
    yield 'yellow';
}

let myColor = [];
for(let color of colors()){
    myColor.push(color)
}
console.log(myColor)