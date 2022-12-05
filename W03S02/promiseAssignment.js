const { statSync } = require("fs");
const { resolve } = require("path");

async function rendam() {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        console.log("Mulai rendam. Setelah ini kucek")
        resolve()
      }, 3000);
    }) 
  }
  async function kucek() {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        console.log("Sedang kucek. Setelah ini bilas")
        resolve()
      }, 2000);
    }) 
  }
  async function bilas() {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        console.log("Sedang bilas. Setelah ini jemur")
        resolve()
      }, 1000);
    })
  }
  async function jemur() {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        console.log("Sedang jemur. Setelah ini setrika")
        reject("Ada hujan")
      }, 5000);
    }) 
  }
  async function setrika() {
    return new Promise((resolve, reject)=>{
      setTimeout(function() {
        console.log("Sedang setrika. Setelah ini selesai")
        resolve()
      }, 4000);
    }) 
  }



// PROMISE CARA 1
// rendam().then(()=>kucek().then(()=>bilas().then(()=>jemur().then(()=>setrika()))))
// rendam().then(()=>kucek().then(()=>bilas()))
// rendam().then(()=>kucek())

// PROMISE cara 2
rendam().
    then(kucek).
    then(bilas).
    then(jemur).
    then(setrika).catch(e=>{
        console.log("Hello", e)
    })

//AWAIT
// async function nyuci(){
//     await rendam()
//     await kucek()
//     await bilas()
//     await jemur()
//     await setrika().catch(e=>{
//         console.log("Hello", e)
//     })
// }

// nyuci()