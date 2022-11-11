//fibonacci
function fibonacci(n){
    if(n<2){
        return n
    }
    else{
        return fibonacci(n-1)+fibonacci(n-2)
    }    
}
console.log(fibonacci(4))

//looping for
function nbYear(p0, percent, aug, p) {
    let x=0
    let year=0
      
    for(let i=p0; i<p; i+=x){
      x=parseInt(i*(percent/100))+aug
      year++
    }
    return year
}

// function nbYear(p0, percent, aug, p) {  
//     for(years=0; p0<p; years++){
//         p0=p0+parseInt(p0*percent/100)+aug
//     }
//     return years
// }


//looping while
function nbYears(p0, percent, aug, p) {
    years=0
    while(p0<p){
      p0=p0+parseInt(p0*percent/100)+aug
      years++
    }
    return years
  }