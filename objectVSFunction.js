console.log(typeof Object) //funcao
console.log(typeof new Object) //novo objeto

const cliente = function() {}
console.log(typeof cliente) //function
console.log(typeof new cliente) //object

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto) //function - js determina que class converte em uma function
console.log(typeof new Produto()) //object

//class é um detalhe de sintaxe mas internamente é uma function só uma forma diferente de construir uma function