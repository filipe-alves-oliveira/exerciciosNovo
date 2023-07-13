//operador unario - opera em cima de um unico operando(-) -a

let num1 = 1
let num2 = 2

num1++  //pos fixada
console.log(num1) //2

--num1 //pode ser usado --antes ou ++depois, pode ser qualquer um
console.log(num1) //1

console.log(++num1 === num2--) //true
//++ executada antes da comparacao e --após a comparacao 
//antes num1 = 1 e num2 = 2 na hora da comparacao num1=2 e depois de comparacao que é decrementado o num2, ficando com 2 e depois 1

console.log(num1 === num2) //false
//escrever codigo simples e facil é dificil, complexo, com bons nomes, claro, priorizar sentenca de codigo que nao cause confusao

let number = 1 

console.log(++number) //2
console.log(--number) //0
console.log(typeof number) //fala o tipo que é o number - number


