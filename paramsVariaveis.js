//arguments - array, vou pegar o indice de cada elemento do arrray
// a partir desse indice eu consigo fazer arguments [] - acessando o indice de cada um 
// dos elementos que foram passados como argumento para essa function

function soma() {
    let soma = 0
    for (i in arguments) {
        soma += arguments[i]
    }   
    return soma
}

console.log(soma()) //0
console.log(soma(1))//1
console.log(soma(1.1, 2.2, 3,3))//6.6
console.log(soma(1.1, 2.2, "Teste"))//3.30000000000003Teste - concatena com a string teste
console.log(soma('a', 'b', 'c'))//0abc - como inicio com 0 ele ta presente em soma

//temos a possibilidade de pegar todos os parametros que foram passados
// a partir da chamada de uma funcao e fazer qualquer tipo de operacao

const a = 5
const b = 5

console.log(a + b) //10
console.log(a ** b) //3125 - 5 elevado a 5



