const { statSync } = require("fs");
const { resolve } = require("path");

async function rendam(cb) {
      setTimeout(function() {
        console.log("Mulai rendam. Setelah ini kucek")
        cb()
      }, 3000);
    }

  async function kucek(cb) {
      setTimeout(function() {
        console.log("Sedang kucek. Setelah ini bilas")
        cb()
      }, 2000);
    }
  
  async function bilas(cb) {
      setTimeout(function() {
        console.log("Sedang bilas. Setelah ini jemur")
        cb()
      }, 1000);
    }

  async function jemur(cb) {
      setTimeout(function() {
        console.log("Sedang jemur. Setelah ini setrika")
        cb()
      }, 5000);
    }

  async function setrika() {
      setTimeout(function() {
        console.log("Sedang setrika. Setelah ini selesai")
      }, 4000);
    }

//  rendam() 3000
//  kucek(); 2000
//  bilas(); 1000
//  jemur(); 5000
//  setrika(); 4000
 
 // Sedang bilas. Setelah ini jemur     1000
 // Sedang kucek. Setelah ini bilas     2000
 // Mulai rendam. Setelah ini kucek     3000
 // Sedang setrika. Setelah ini selesai 4000
 // Sedang jemur. Setelah ini setrika   5000
 
 
 // expect
 // Mulai rendam. Setelah ini kucek   3000
 // Sedang kucek. Setelah ini bilas   2000
 // Sedang bilas. Setelah ini jemur   1000
 // Sedang jemur. Setelah ini setrika  5000
 // Sedang setrika. Setelah ini selesai 4000
 


//CALBACK
rendam(function(){
  kucek(function(){
    bilas(function(){
      jemur(function(){
        setrika()
      })
    })
  })
})


// rendam().then(a=>console.log(a))
// kucek().then(b=> console.log(b))
// bilas().then(c=>console.log(c))
// jemur().then(d=> console.log(d))
// setrika().then(e=>console.log(e))

// async function print() {
//     await rendam().then(a => console.log(a))
//     await kucek().then(a => console.log(a))
//     await bilas().then(a => console.log(a))
//     await jemur().then(a => console.log(a))
//     await setrika().then(a => console.log(a))
// }

//  async function print(){
        // rendam()
      //  await kucek()
      //   console.log("Hellow")
        // await kucek()
        // await bilas()
        // await jemur()
        // await setrika()

// }

// print()
// rendam()
// kucek()
// bilas()
// jemur()
// setrika()

 // Using callback
 // Async Await