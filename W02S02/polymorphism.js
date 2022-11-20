class Human {
    constructor(props) {
        // Do something
    }
  
    introduce() {
      // Do something
    }
  
    work() {
      console.log(`${this.constructor.name}:`,"Working....")
    }
  }
  
  //------------------------------------------------
  // Public Server Module/Helper
  const PublicServer = Base => class extends Base {
    save() {
      console.log("SFX: Thank You!")
    }
  }
  
  // Military Module/Helper
  const Military = Base => class extends Base {
    shoot() {
      console.log("DOR!")
    }
  }
  //------------------------------------------------

  
class Doctor extends PublicServer(Human) {
    constructor(props) {
      super(props);
    }
  
    work() {
      super.work(); // From Human Class
      super.save(); // From Public Server Class
    }
  }
  
  class Police extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
  
    constructor(props) {
      super(props);
      this.rank = props.rank;
    }
  
    work() {
      super.work();
      super.shoot(); // From Military class
      super.save(); // From Public Server Class 
    }
  }

  class Army extends PublicServer(Military(Human)) {
    static workplace = "Police Station";
  
    constructor(props) {
      super(props);
      this.rank = props.rank;
    }
  
    work() {
      super.work();
      super.shoot(); // From Military class
      super.save(); // From Public Server Class 
    }
  }
  
  class Writer extends Human {
    
    work() {
      console.log("Write books");
      super.work();
    }
  }
  
  /* Instantiate Military Based Class */
const Wiranto = new Police({
    name: "Wiranto",
    address: "Unknown",
    rank: "General"
  })
  
  const Prabowo = new Army({
    name: "Prabowo",
    address: "Unknown",
    rank: "General"
  })
  /* --------------------------------- */
  
  /* -----Instantiate Doctor------ */
  const Bambang = new Doctor({
    name: "Andika Bambang",
    address: "Kartopuran"
  })
  /* ----------------------------- */
  
  /* -----Instantiate Writer------ */
  const Noah = new Writer({
    name: "Yuval Noah Harari",
    address: "Sangiran"
  })
  /* ----------------------------- */

Wiranto.shoot(); // Work
Prabowo.shoot(); // Work

Wiranto.save() // Work
Prabowo.save() // Work
Bambang.save() // Work

Wiranto.work() // Work
Prabowo.work() // Work
Bambang.work() // Work
Noah.work() // Work 