import { soma, sub, PI } from '../lib/math'
import sum from '../lib/math'
import * as math from '../lib/math' //importa tudo que tem no arquivo, tudo que o arquivo math exporta

import { soma as sum } from '../lib/math' //renomear as importaçoes no momento que estou importando

console.log(soma(1,2))//3
console.log(sub(1,2))//1
console.log(PI)//3.14

console.log(sum(1,2))//3

//--------------------

let weight

console.log(typeof weight);

let variavel = {
    name: '',
    age: 2,
    start: 2.3,
    isSubscribed: true,
}

console.log(variavel)

let student = {
        name: 'Filipe',
        age: 2,
        start: 2.3,
        isSubscribed: true,
};

// console.log(`${student.name} tem 
// ${student.age} e é ${student.isSubscribed}`)

