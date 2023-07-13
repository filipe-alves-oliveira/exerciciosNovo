// function ()constructor
//  * expressao new
//  * criar um novo objeto
//  * this keyword

let name = new String("Filipe")
console.log(name) //[String: 'Filipe']
string{"Filipe"} 
// 0: "F"
// 1: "i"
// 2: "l"
// 3: "i"
// 4: "p"
// 5: "e"

//data atual e horário
let date = new Date("2022-12-01")
console.log(date)

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//this - nome associado ao objeto qe for criado a partir dessa function
function Person(name) {
    this.name = name                //referencia o filipe que ta fora
    this.walk = function(){
        return this.name + " está andando"
    }
} 

const filipe = new Person("Filipe") //usa o new para definir que é uma funcao construtora e retorna um obj 
const joao = new Person("Joao") //new person
const fernanda = new Person("Fernanda")
console.log(filipe.walk()) //obj do tipo Person que tem uma propriedade chamada name
console.log(joao.walk())
console.log(fernanda.walk())

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
//fazendo de outra forme:

const nome = { name: "Filipe"}
const Sobre = "Alves"

console.log(`Olá seu nome é ${nome.name} ` + Sobre) //Olá seu nome é Filipe Alves


//--------------------------------outros exemplos
function Carro(velocidadeMaxima = 200, delta = 5) {
    //atributo privado pertence apenas a function carro, quando instancio um obj a partir dessa function, nao posso acessar direto a let (obj.velocidadeAtual), pq é atributo interno dessa function
    let velocidadeAtual = 0 

    //metodo publico - visivel para fora da function
    this.acelerar = function (){ //function para acrescentar a velocidade atual q esta visivel apenas dentro da function
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta  //teste para saber se a vel atual nao ultrapassa a vel maxima 
        } else {
            velocidadeAtual = velocidadeMaxima //garantir q vai estar mais q a vel.max. ex.: 199 + 5, nao deixa e fica com vel. maxima = atual = 199
        }
    }

    //metodo publico dentro da estrutura da funcao construtora carro
    this.getVelocidadeAtual = function () { //quisesse q fosse privado bastava colocar no lugar do this, const ou let.
        return velocidadeAtual
    }
}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual()) //5

const ferrari = new carro(350, 20)
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual()) //20

console.log(typeof Carro) //function
console.log(typeof ferrari) //obj







