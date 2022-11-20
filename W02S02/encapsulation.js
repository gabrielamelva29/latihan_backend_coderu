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
    }
  
    // Check if it can work
    checkWorkCapability() {
      if (!this.isAlive) {
        console.log("I'm dead, I obviously can't work!");
        return false;
      }
    }
  
    // Prepare for work
    prepareForWork() {
      console.log("Take a bath");
      console.log("Suit up!");
      console.log("On the way to the workplace");
    }
  
    doWork() {
      console.log("Coding");
      console.log("Get Stuck");
      console.log("Opened up Stack Overflow");
    }
  
    work() {
      if (!this.checkWorkCapability()) return; // Stop if he/she can't work
      this.prepareForWork();
      this.doWork();
    }

    #gossip() {
        return "Ada Gossip"
    }
  
    bisik() {
        return this.#gossip()
    }
  }
  
  let mj = new Human("Michael Jackson", false);
  mj.work() // Output: I'm dead, I obviously can't work!
  
  // BUT, mj can access these following methods
  mj.doWork();
  mj.checkWorkCapability();
  mj.prepareForWork();
  
  console.log(mj.name)
  console.log(mj.#gossip())