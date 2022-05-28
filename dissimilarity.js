const s = "ab"
const t = "abcde"
let arrS = s.split('')
let arrT = t.split('')


for(i=0; i<arrT.length; i++){
    for(j=0; j<arrS.length; j++){
        if(arrT[i] == arrS[j]){
            arrT.splice(i, 1)
        }
    }
}

let diff = arrT
console.log(diff)
