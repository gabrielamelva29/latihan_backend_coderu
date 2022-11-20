class Person {
    static isLivingOnEarth = true;
 
    constructor(name, address, isMaried) {
        this.name =   name
        this.address = address
        this.isMaried = isMaried 
    }   
}

let person1 = new Person("Fulan", "Jl Melati", false)
let person2 = new Person("Ahmad", "Jl Karet", true)
console.log(person1.name)
console.log(Person.isLivingOnEarth)