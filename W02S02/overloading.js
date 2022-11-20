class Human {
    constructor(name, address) {
      this.name = name;
      this.address = address;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name}`)
    }
  }
  
  // Create a child class from Person
  class Programmer extends Human {
  
    constructor(name, address, programmingLanguages) {
      super(name, address) // Call the super/parent class constructor, in this case Person.constructor;
      this.programmingLanguages = programmingLanguages;
    }
  
     // Overload the Introduce Method
    introduce(withDetail) {
        super.introduce(); // Call the super class introduce instance method.
        if (withDetail) console.log(`I can write a programming using these languages`, this.programmingLanguages);
    }
  
    code() {
      console.log(
        "Code some",
        this.programmingLanguages[
          Math.floor(Math.random * this.programmingLanguages.length)
        ]
      )
    }
  }
  
let Reza = new Programmer("Fahmi Alfareza", "Magelang", ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]);
Reza.introduce() // Hi, my name is Reza; I can write a programming using these languages ["Javascript", "Ruby", "Go", "Kotlin", "Python", "Elixir"]
Reza.introduce("asdasd") 