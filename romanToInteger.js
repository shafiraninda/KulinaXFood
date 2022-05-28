const input = "IV"


function disimilarity(input){
    let n = input.split("")
    let roman = [
        { "I": 1 },
        { "V": 5 },
        { "X": 10 },
        { "L": 50 },
        { "C": 100 },
        { "D": 500 },
        { "M": 1000}
    ]
    let index = []
    n.map((item)=>{
        index.push(roman.findIndex( x => Object.keys(x) == item))
    })
    
    let value = 0
    for(i=0; i<index.length; i++){
        let amount = Object.values(roman[index[i]])
        if( index[i] == index[i+1] && index[i] < index[i+2] ){ 
            //untuk angka romawi IIX atau XXC akan error
            console.log("Angka romawi tidak valid")
            value = "error"
            break
        } else if(index[i] == index[i+1] && index[i+1] != -1 && index[i+1] == index[i+2] && index[i+2] == index[i+3]){ 
            // untuk romawi XIIII atau CXXXX akan error 
            console.log("Angka romawi tidak valid")
            value = "error"
            break
        } else if(index[i] < index[i+1]){
            value = value + (amount[0]*(-1))
        } else {
            value = value + amount[0]
        }
    }
    return value
}


console.log(disimilarity(input))