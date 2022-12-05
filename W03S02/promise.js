const A = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello A");
    }, 400);
  })


const B = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello B");
    }, 100);
  })  

const C = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("Hello C");
}, 500);
})  


// A.then(a => {
//     console.log(a)
//     B.then(b => {
//         console.log(b)
//         C.then(c => {
//             console.log(c)
//         }).catch(e => {
//             console.log("error ", e)
//         })
//     })
// })

// async function print() {
//     await A.then(a => console.log(a))
//     await B.then(a => console.log(a))
//     await C.then(a => console.log(a))
// }

// print()

A.then(a => console.log(a))
B.then(a => console.log(a))
C.then(a => console.log(a))