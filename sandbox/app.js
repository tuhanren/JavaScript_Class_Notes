//call function anywhere, but for classes you have to declare first
//sayHi();
function sayHi(){
    return console.log('Hello this function can be called anywhere!');
}
//sayHi();

//create mixin for extend more than one class into a single class (composition over inheritance)
let mixin = {
    madeIn() {
        console.log('This car was made in year 2019!');
    }
}
//add mixin to prototype
let carMixin = {
    __proto__: mixin,

    madeIn() {
        super.madeIn();
    }
}

//class
class Car {
    //constructor
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    //method
    carStats() {
        return `This car has ${this.doors} doors, a ${this.engine} engine and a beautiful ${this.color} color!`;
    }

    //static method are the method are not accessible through an instance of a class, but only available through the class itself
    static totalDoors(car1, car2){
        const doors1 = car1.doors;
        const doors2 = car2.doors;

        return doors1 + doors2;
    }
}

//extend new class
class SUV extends Car {
    constructor(doors, engine, color, brand, carStats){
        //super basiclly creates a new object and pulls all the stuff that we have in initial class Car
        super(doors, engine, color, carStats);
        this.brand = brand;
        this.wheels = 4;
        this.ac = true;

        //assign mixin
        Object.assign(this, carMixin);
    }

    myBrand(){
        return console.log(`This SUV is a ${this.brand}`);
    }
}

//create new instance of Car class
//const cx5 = new Car(4, 'V6', 'grey');
const civic = new Car(3, 'V4', 'blue');
const cx5 = new SUV(4, 'V8', 'black', 'mazda')

console.log(cx5);
console.log(cx5.myBrand());

//mixin
console.log(cx5.madeIn());
// console.log(cx5.carStats());

// console.log(civic);
// console.log(civic.carStats());
// //use static method through Car class
// console.log(Car.totalDoors(cx5, civic));

