//operador ternario 3 operandos
//composto por 3 partes - expressao V ou F, V : F 

let filipe = 1

console.log(false ? 'alo' : 'nada') //nada

const resultado = nota => nota >=7 ? 'Aprovado' : 'Reprovado'  //arrow function sem corpo

console.log(resultado(7.1)) //Aprovado
console.log(resultado(6.8)) //Reprovado

// const resultado = nota => {
//     return nota >=7 ? 'Aprovado' : 'Reprovado'  //arrow function com corpo
// }