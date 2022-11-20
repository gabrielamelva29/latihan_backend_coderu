class Human {
    static isLivingOnEarth = true;
    static group = "Vertebrate"; 
    
    constructor(name, isAlive) {
      this.name = name; // This will create a property called name
      this.isAlive = isAlive; //
    }
  
    // Instance method signature
    introduce() {
      console.log(`Hi, my name is ${this.name} and I'm ${this.isAlive ? "alive" : "dead"}`);
  
      /*
        `this` keyword refers to the instance object.
        In this case we have an instance named `mj`,
        so it will return this thing
        Person { name: "Michael Jackson", isAlive: false } 
  
        Which we can also call another method
        */
    }

    myData() {
        let name = this.myName()
        return name + " " + this.isAlive
    }
    
    myName() {
        return this.name
    }

    static Hello() {
        console.log("Hello There!!!!")
    }

    work() {
        console.log("Yes I am working")
    }
  
  }

  class Animal {
      constructor(name) {
          this.name = name
      }
  }


//   let human1 = new Human("Joe Biden", true)
//   let tiger = new Animal("Tiger")

class Car {
    constructor(plat, time) {
        this.plat = plat 
        this.time = time
    }

    calculate(timeout) {
        return (timeout - this.time) * 10000
    }
}

class Bike {
    constructor(plat, time) {
        this.plat = plat 
        this.time = time
    }

    calculate(timeout) {
        return (timeout - this.time) * 1000
    }
}

let car1 = new Car("123", 1)
let bike1 = new Bike("12344", 2)


function cetak(object) {
    if (object instanceof Car) {
        console.log("Yess this is Car")
    }

    if (object instanceof Bike) {
        console.log("Yess this is Bike")
    }

    console.log(`${object.plat} jumlah yg harus anda bayar ${object.calculate(5)}`)
}

cetak(car1)
cetak(bike1)
Bike.hello()