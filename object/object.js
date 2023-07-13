//-->object
const person = {
    name: 'Filipe',
    age: 30,
    weight: 88.6,
    isAdmin: true,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
        },
};

// console.log(person); //todo o obj
// console.log(person.name); //só o name do obj
// console.log(`${person.name} tem ${person.age} anos e peso de ${person.weight} kg.`)

//stringify() converte valores em javascript para uma String JSON.

const user = {
    name: 'Filipe',
    age: 30,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
        },
};

document.body.innerText = ('name' in user) //true
document.body.innerText = Object.keys(user) // name,idade,adress - retorna um vetor com tds as chaves do obj
document.body.innerText = Object.values(user) // filipe,27,88.6 [object object]- retorna tds os valores obj
document.body.innerText = JSON.stringify(Object.values(user))
// [
//     "Filipe",
//     31,
//     {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     }
// ]

document.body.innerText = JSON.stringify(Object.entries(user)) //retorna um vetor com vários vetores dentro, com 2 informaçoes 1 chave depois o valor
// [[
//     "name",
//     "filipe"
// ],
// [
//     "idade",
//     31,
// ],
// [
//     ...
// ]
// ]

function multObj(obj){
    obj.value *= obj.value
    return obj
}

const numObj = { value: 10 }
console.log(multObj(numObj)) //100
console.log(numObj) //100

//todas as variaveis comuns que nao for obj elas passam apenas o valor 
//variavies do tipo objeto é passado por referencia, comportamento por referencia 















