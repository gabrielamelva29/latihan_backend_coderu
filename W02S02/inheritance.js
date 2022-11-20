class Human {
    static isLivingOnEarth = true;
    static group = "Vertebrate"; 
    
    constructor(name, address) {
      this.name = name; // This will create a property called name
      this.address = address
    }

    introduce() {
      console.log(`Hi, my name is ${this.name}`);
    }

    work() {
        console.log("Yes I am working")
    }
  
}

// Create a child class from Human
class Programmer extends Human {
    constructor(name, address, programmingLanguages) {
      super(name, address) // Call the super/parent class constructor, in this case Person.constructor;
      this.programmingLanguages = programmingLanguages;
    }
  
    introduce() {
      super.introduce(); // Call the super class introduce instance method.
      console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random() * this.programmingLanguages.length)
        ]
      )
    }
}
  
// Initiate from Human directly
let Obama = new Human("Barrack Obama", "Washington DC", true);
Obama.introduce() // Hi, my name is Barack Obama
  
let Reza = new Programmer("Fahmi Alfareza", "Magelang", ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]);
Reza.introduce() // Hi, my name is Reza; I can write a programming using these languages ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]
Reza.code() // Code some Javascript/Ruby/...
// Reza.work() // Call super class method that isn't overrided or overloaded
  
//   try {
//     // Obama can't code since Obama is an direct instance of Person, which don't have code method 
//     Obama.code() // Error: Undefined method "code"
//   }
  
//   catch(err) {
//     console.log(err.message)
//   }
  
//   console.log(Reza instanceof Human) // true
//   console.log(Reza instanceof Programmer) // true