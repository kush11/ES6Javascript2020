function Car(options) {
    this.title = options.title
}

Car.prototype.drive = function(){
    return 'Vroom'
}

const car = new Car({title:'Focuse'})
console.log(car.drive())
console.log(car)