let N=5

//segitiga siku-siku (1)
for(let i=0; i<N; i++){ //i=0
    let data=''
    for(let j=0; j<=i; j++){
        data+='*'
    }
    console.log(data)          
}

// Segitiga siku" (2)
for(let i=0; i<N; i++){ //i=0
    let data=''
    for(let j=1; j<N-i; j++){
        data+=' '
    }
    for(let k=0; k<=i; k++){
        data+='*'
    }
    console.log(data)          
}

// Segitiga siku" (3)
for(let i=0; i<N; i++){ //i=0
    let data=''
    for(let j=0; j<i; j++){
        data+=' '
    }
    for(let k=i; k<N; k++){
        data+='*'
    }
    console.log(data)          
}

// Segitiga siku" (4)
for(let i=0; i<N; i++){ //i=0
    let data=''
    for(let j=i; j<N; j++){
        data+='*'
    }
    console.log(data)          
}

// segitiga (1)

for(let i=0; i<N; i++){
    let data=''
    for(let j=i; j<N-1; j++){
        data+=' '
    }
    for(let j=0; j<(i*2)+1; j++){
        data+='*'
    }
    console.log(data)
}

// Segitiga terbalik
for(let i=0; i<N; i++){
    let data=''
    for(let j=0; j<i; j++){
        data+=' '
    }
    for(let j=0; j<2*(N-i)-1; j++){
        data+='*'
    }
    console.log(data)
}

// Diamond
for(let i=0; i<N-1; i++){
    let data=''
    for(let j=i; j<N-1; j++){
        data+=' '
    }
    for(let j=0; j<(i*2)+1; j++){
        data+='*'
    }
    console.log(data)
}

for(let i=0; i<N; i++){
    let data=''
    for(let j=0; j<i; j++){
        data+=' '
    }
    for(let j=0; j<2*(N-i)-1; j++){
        data+='*'
    }
    console.log(data)
}

// Diamond setengah kosong
for(let i=0; i<N; i++){
    let data=''
    for(let j=i; j<N-1; j++){
        data+=' '
    }
    for(let j=0; j<(i*2)+1; j++){
        if(j==0 || j==i*2){
            data+='*'
        }
        else{
            data+=' '
        }
    }
    console.log(data)
}

for(let i=1; i<N; i++){
    let data=''
    for(let j=0; j<i; j++){
        data+=' '
    }
    for(let j=0; j<2*(N-i)-1; j++){
        data+='*'
    }
    console.log(data)
}