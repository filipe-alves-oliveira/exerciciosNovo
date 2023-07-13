// Subistituir a palavra function pela => // 95 - Arrow Function - sintaxe reduzida - ES2015
//sempre atribuida para uma const

//sem arow function
const mult = (n) => {
  n *= n
  return
}
//com arrow function - sintaxe curta - sem return nao precisa de chaves e fica implicito
const mult = (n) => (n*=n)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const f3 = () => console.log(this === window) //undefined
f3() //true

//sem parametro 

const sayMayName = () => {   
    console.log('Filipe') //Filipe
}
sayMayName();

//com parametro

const sayMayName = (name) => {   
    console.log(name) //Filipe Fernanda Sandra
}
sayMayName('Filipe');
sayMayName('fernanda');
sayMayName('sandra');


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
const filipe = () => {
  console.log(`filipe`)
}

filipe() //filipe

//sem arrow
let dobro = function (a) {
  return 2 * a
}

//com arrow (=>) sempre anonima, nao armazenada em varivel ou constante ela nao pode ser chamada depois
dobro = (a) => {
  return 2 * a
}

//forma mais reduzida, qdo tira o corpo da funcao seu retorno é implicito, return é implicito
dobro = a => 2 * a
console.log(dobro(Math.PI)) //6.283185307179586

ola = () => 'Olá'
ola = _ => 'ólá' //_ é um param 
console.log(ola()) // olá








