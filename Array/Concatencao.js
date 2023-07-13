//de: devsamurai > array > concatencao.

let set1 = [1, 2, 3, 4, 5]
let set2 = [6, 7, 8, 9, 10]

console.log(set1 + set2) // 1,2,3,4,56,7,8,9,10 - sai o array e apenas juntao que tem dentro inclusive 5-6 = 56 (coersion do js - converte para uma string)
console.log(set1.join(",") + set2.join(",")) //1,2,3,4,56,7,8,9,10 - igual de cima
console.log(typeof(set1 + set2)) //string - deixa de ser um array e vira string

//forma correta de concatenar dois arrays
console.log(set1.concat(set2)) // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
console.log(set1.concat(set2).concat(set3)) // exemplo caso tenha mais arrays.