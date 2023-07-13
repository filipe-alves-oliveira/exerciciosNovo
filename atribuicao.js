//nao é comparacao é atribuicao

const a = 7
let b = 3

b += a //b = b + a - atribuicao aditiva - estou acrescentando o valor de a a variavel b
console.log(b) //10

b -= 4 //b = b - 4
console.log(b) //6

b *= 2 //b = b * 2 
console.log(b) //12

b /= 2 //b = b / 2 
console.log(b) //6

b %= 2 //b = b % 2 - resto da dividao - se for par valor 0, se for impar resultado é 1
console.log(b) //12.s