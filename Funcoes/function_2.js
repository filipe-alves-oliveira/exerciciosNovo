//armazenando function dentro de uma variavel

function fun1() { }

const fun2 = function () { } //funcao anonima atribuida a uma constante e a partir disso consigo referencia a funcao atraves da constante

const array = [function (a, b) { return a + b}, fun1, fun2] //armazenar funcao dentro de um array
console.log(array[0](2, 3)) //5


const sum = function (number1, number2) {    //funcao anonima ou expression, só pode usar depois de declarada.
    total = number1 + number2
    return total
} 

const mult = function mult(x, y) {   //named function expression -  pouco usada, só pode usar depois de declarada
    return x * y
}

function soma(x, y){  //function declaration - declarando dessa forma o interpretador do js le todas as funcoes e depois executa
    return x + y
}

//console.log(number1 + number2) //nao funciona, só funciona dentro {}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`);
console.log(`o número 2 é ${number2}`);
console.log(`a soma é ${sum(number1, number2)}`);
console.log(total);



//------------->>>>>OUTROS EXEMPLOS - RETORNO É OPCIONAL.
function area(altura, largura){
    const area = altura * largura
    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2`)
    }else{
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())
console.log(area(2, 3, 17, 22, 44))
console.log(area(5, 5))

// 4
// NaN - só um valor o 2 nao passou
// NaN - nenhum valor 
// 6 - apesar de ter varios pegou so os dois primeiros
// Valor acima do permitido: 25m2
// undefined - o retorno da funcao acima foi undefined


//------------->>>>>OUTROS EXEMPLOS - devSamurai - JS avançado 

function sum(n1, n2){
    console.log(n1+ n2)
}
sum(1,1) //2


function soma(n1, n2) {
    const result = n1 + n2
    return result             //retornar o que gostaria q foi passado para function soma
}
const res = soma(2, 2)
console.log(res) //4

//dentro de res ele chama a function soma, q vai calcular a soma e retornar o resultado, logo  retornando para o res que esta no console.log e mostrando ao usuário.

//ou fazer da forma abaixo, sem atribuir const

function soma(n1, n2) {
    return n1 + n2
}
console.log(soma(2, 2)) //4


function mult(n){
    n *= n
    return n
}
let n = 10
console.log(mult(n)) //100
console.log(n) //10
//nesse caso por mais q seja o mesmo nome, mas escopo diferente, o js entende que está passando o valor 10 nao a variavel