//new - criar um novo Object.

//faz com que o let name seja um novo obj
let name = new String('Filipe')
name.surName = "Alves" //surname: "Filipe"

console.log(`${name} ${name.surName}`) //Filipe Alves

let age = new Number(31)

console.log(name, age) //obj do tipo string e obj do tipo number 
// Filipe Alves
// [String: 'Filipe'] { surName: 'Alves' } [Number: 31]

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let data = new Date('2020-12-01')
console.log(data) //mon nov 30...

console.log(data.__proto__) // proto.. propriedade padrao da date

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const nome = 'filipe'

const sobrenome = 'alves'

const number = 2

console.log(nome + ' ' + sobrenome + number) //filipe alves2















