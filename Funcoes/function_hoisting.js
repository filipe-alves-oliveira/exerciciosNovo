// hoisting - elevacao quando usamos o var

console.log('a =', a) //undefined
var a = 2
console.log('a =', a) //2

//o js faz o hoisting, realmente isso que acontece.
var a
console.log('a =', a) //undefined
a = 2
console.log('a =', a) //2


//---------Se for declarado dentro da FUNCTION ela sofre a elevecao
sayMayName(); 

function sayMayName() {
    console.log('Filipe') //Filipe
}

//primeiro executa, chama, depois cria.
//Acontece que sofre o hoisting, por debaixo dos panos, fosse como o JS coloca ela encima da funcao que foi chamada


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-Com const náo sofre elevacao
sayMayName(); 

const sayMayName = function(){
    console.log('Filipe') //Error - nao consigo acessar sayMayName antes da inicializacao, pq usa const.
}//Cannot access 'sayMayName' before initialization

//se usasse var, sofre elevacao, mas nao da certo pq o sayMayName vai ser undefined - var sayMayName.
//entao quando fazemos uma funcao de uma maneira de expressao ela nao sofre elevacao


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
sayMayName(); 

const sayMayName = function sayMayName(){
    console.log('Filipe') // ainda nao é uma funcao nem com const nem com var
} //Cannot access 'sayMayName' before initialization

// só funciona da primeira maneira.