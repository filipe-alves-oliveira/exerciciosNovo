//Metodos de Array - Filter - filtra o array e náo altera a variavel q está realizando essa function

const array = [1, 2, 3, 4, 5];

//metodo antigo
let result = []
for (const n of array){
    if(n > 1) {
        result.push(n)
    }
}
console.log(result) //[ 2, 3, 4, 5 ]

const gt10 = function(item) {
    return item > 4 //true ou false
}

const res = array.filter(gt10)
console.log(array) // [ 1, 2, 3, 4, 5 ] - mesmo depois de passar o array.filter, ele nao altera a variaval do array inicial, tem q colocar o array.filter em uma const.
console.log(res) // [ 5 ]


//Ou poderia ser feito da maneira abaixo, com metodo novo nativo do JS, usando o filter, SEM arrow function, sem ter q declarar uma nova funcao:
let res = number.filter(function (item){
    return item > 10
})
console.log(res) // [ 5 ]


//Ou poderia ser feito da maneira abaixo, COM arrow function sem ter q declarar uma nova funcao:
let res = number.filter((item) => item > 10) //só com umalinha de return
console.log(res) // [ 5 ]


// OUTRO EXEMPLO ---->> metodo novo nativo do JS, usando o filter
const numbers = [1, 2, 3, 4, 5];

const filter = numbers.filter(item => item % 2 !== 0) 
console.log(filter) //true - [1,3,5] - só impares

const map = numbers.map(item => item * 10)
console.log(map) //[ 10, 20, 30, 40, 50 ]


// OUTRO EXEMPLO ---->fitrar maiores de idade
const people = [
    {nome: "filipe", age: 18},
    {nome: "amanda", age: 12},
    {nome: "pedro", age: 21}
]

let maior = people.filter((p) => p.age >= 18) //criou uma function q receb um atributo p

console.log(maior) //[ { nome: 'filipe', age: 18 }, { nome: 'pedro', age: 21 } ]



















