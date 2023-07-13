//Array
//sempre que temos array temos 3 situaçoes
//>iniciar uma variavel com indice
//>>ter uma condicao, para saber quando devo parar
//>>>incrementar 1 para ir para novo item do array (++)

const animals = [
  "Lion",
  "Dog",
  "Cat",
  {
    name: "pig",
    age: 5,
  },
];

//acessar valores dentro de um array
console.log(animals[1]); //Dog - náo pode acessar como .1, pois pode dar confusao ao js.

//total elementos de um array - length
console.log(animals.length); //4

console.log(animals[2]); //Cat
console.log(animals[animals.length - 1]) //{ name: 'pig', age: 5 }
