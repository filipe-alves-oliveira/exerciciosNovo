//>>>>>>>>>>>>>Conversao number e String

console.log(Boolean("")) //false
console.log(Boolean("abc")) //true
console.log(Boolean(0)) //false
console.log(Boolean(1)) //true

//conversao de boolean para number 
console.log(typeof Number(true)) //1 - number
console.log(Number(false)) //0

//conversao de string para boolean
console.log(string(false)) //false
console.log(string(true)) //true

//conversao de string para date
console.log(new Date()) //2023-02-23T20:10:21.515Z
console.log(new Date("30/04/2022")) //Invalid Date - formato ISO nao comporta nossas datas, apenas mes/dia/ano
console.log(new Date("04/30/2022 12:00")) //2022-04-30T03:00:00.000Z - correto, formato ISO.

//conversao de date para string
console.log(new Date().toString()) //Thu Feb 23 2023 17:17:06 GMT-0300 (Brasilia Standard Time)
console.log(new Date().toISOString()) //2023-02-23T20:17:36.083Z

//conversao de array para String
//obs.: tipo string e array eles se conversam, pq pela string ser uma cadeia de caracteres, ela pode ser lida como um array.
let nome = "filipe"
console.log(nome[0]) //f
//nome todo
for(const v of nome){
    console.log(v)
}
// f
// i
// l
// i
// p
// e

let values = [1, 2, 3, 4]
console.log(values.join(" ")) //1 2 3 4


//conversao de OBEJTO para JSON e JSON para OBJETO
//JSON - java script object notation - pega o objto e coloca em formato de string, tipo json

const people = [
    {
        id: 1,
        name: "filipe",
        sobrenome: "Alves",
        idade: 20,
        adrres :{
            rua: "Assad chadi",
            n: 33
        }
    }
]
console.log(typeof people) //object
console.log(typeof JSON.stringify(people)) //string
console.log(JSON.stringify(people))
//[{"id":1,"name":"filipe","sobrenome":"Alves","idade":20,"adrres":{"rua":"Assad chadi","n":33}}]

//JSON para OBJETO
const json = '[{"id":1,"name":"filipe","sobrenome":"Alves","idade":20,"adrres":{"rua":"Assad chadi","n":33}}]'
console.log(JSON.parse(json))
// [
//     {
//       id: 1,
//       name: 'filipe',
//       sobrenome: 'Alves',
//       idade: 20,
//       adrres: { rua: 'Assad chadi', n: 33 }
//     }
//   ]
