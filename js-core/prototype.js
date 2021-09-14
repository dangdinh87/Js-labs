function Car(wheels, color) {
  this.wheels = wheels;
  this.color = color;
}

const factory = {
  date: '15',
};

Car.prototype = factory;
const car = new Car(4, 'black');

console.log(car);

let obj = {
  eat: true,
};

delete obj.__proto__;

console.log(obj);
