let N=5
//persegi
for(let i=0; i<N; i++){
    let data=''
    for(let j=0; j<N; j++){
        data+='*'
    }
    console.log(data)
}

//persegi bolong
for(let i=0; i<N; i++){
    let data=''
    for(let j=0; j<N; j++){
        if(j==0 || j==N-1 || i==0 || i==N-1){
            data+='*'
        }
        else{
            data+=' '
        }
    }
    console.log(data)
}