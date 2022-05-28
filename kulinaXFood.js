const n = 15 // user input
let chunks = []
for( i=1; i<=n; i++){
    if(i%3== 0 && i%5==0){
        chunks.push("Kulina x Food")
    } else if(i%3 == 0){
        chunks.push("Kulina")
    } else if(i%5==0){
        chunks.push("Food")
    }else{
        chunks.push(i.toString())
    }
}
console.log(chunks)