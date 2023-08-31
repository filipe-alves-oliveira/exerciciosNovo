// var, let e const

// var x = 10
// var y = 15

// if(y > 10) {
//     var x = 5 
//     console.log(x) //5
// }

// console.log(x) // 5
// //o escopo global está sendo alterado por um bloco if.

// --- LET - nao mancha o escopo global
// let a = 10
// let b = 15

// if(b > 10) {
//     let a = 5
//     console.log(a) //5
// }

// console.log(a) //10

// // --- LET
// let i = 100 //global

// for(let i = 0; i < 5; i++){
//     console.log(i) // 0 1 2 3 4 5 //variavel temporaria pq executa apenas durante o loop
// }

// console.log(1) //100

//--------- CONST

// function logName() {
//     const name = "Filipe"
//     console.log(name)
// }

// const name = "Pedro"

// logName() //filipe

// console.log(name) //pedro


//Arrow Function

//com function
const functionNormal = function functionNormal(a, b){
    return a + b 
}
console.log(functionNormal(5, 5)) //10


//com arrow
const arrowFunction = (a, b) => {
    return a + b 
}
console.log(arrowFunction(5, 5)) //10


//em linha 
const inLine = (a, b) => a + b
console.log(inLine(5, 5)) //10


//Arrow com parametros
const bemVindo = (name) => {
    if(name){
        return 'Olá ' + name + '!'
    }else{
        return 'Olá'
    }
}
console.log(bemVindo()) //Olá
console.log(bemVindo('filipe')) //Olá filipe


//arrowFunction sem argumentos

const arrowFunctionSemArgumento = () => console.log("arrow Function Sem Argumento")

arrowFunctionSemArgumento() //arrow Function Sem Argumento


// //This com ArrowFunction - COM METODO ANTIGO
// const user = {
//     name: "Filipe",
//     usandoMeuNome() {        //criado metodo dentro do objeto
//         setTimeout(function() {
//         console.log(this)
//         console.log("name: " + this.name) //aqui o this está se referindo a window não ao objeto user (pai do this)
//                                         //pq tenho a function anonima, this só vai funcionar fora
//     }, 500)
// }}

// user.usandoMeuNome() //name: 


// //Resolvendo o erro de cima para aparecer o name do objeto
// const user1 = {
//     name: "Filipe",
//     usandoMeuNome() {        
//         var self = this //this fora referindo ao objeto user
//         setTimeout(function() {
//         console.log(self)
//         console.log("name: " + self.name) 
//     }, 500)
// }}

// user1.usandoMeuNome() //name: Filipe

// //This com ArrowFunction - COM ARROW
// const user2 = {
//     name: "Filipe",
//     usandoMeuNome() {        
//         var self = this 
//         setTimeout(function() {
//         console.log(self)
//         console.log("name: " + self.name) 
//     }, 500)
// },
// usandoMeuNomeComArrow() {
//     setTimeout(() => {
//         console.log(this)
//         console.log("name: " + this.name) 
//     }, 700)
// }
// }

// user2.usandoMeuNomeComArrow() //name: Filipe - mesmo resultado de cima só que com arrow o this ser o elemento pai de fato, não a window



//FILTER

// const array = [1, 2, 3, 4, 5]

// const maiorNumero = array.filter((n) => {  //n=1, n=2, n=3
//     if(n >= 3) {
//         return n
//     }
// })

// console.log(maiorNumero)


// const users = [
//     { name: 'Filipe', available: true },
//     { name: 'pedro', available: false },
//     { name: 'joao', available: true },
//     { name: 'jose', available: false },
// ]

// const resgatarUsuariosDisponiveis = users.filter((user) => user.available)   //(user) nome da entidade de forma individual
//                                                             //sem bloco sem return, está implicito pq tem apenas uma linha

// console.log(resgatarUsuariosDisponiveis) // { name: 'Filipe', available: true }, { name: 'joao', available: true }


// const resgatarUsuariosNaoDisponiveis = users.filter((user) => !user.available) 

// console.log(resgatarUsuariosNaoDisponiveis) //{ name: 'pedro', available: false }, { name: 'jose', available: false }



//-------MAP
//percorre todos os elementos e modifica-os.

const products = [
    {name: 'camisa', price: 10.99, category: 'roupas'},
    {name: 'ferro', price: 120.99, category: 'eletro'},
    {name: 'fogao', price: 104.99, category: 'eletro'},
    {name: 'calça', price: 1.99, category: 'roupas'},
]

products.map((product) => {
    if(product.category === 'roupas'){
        product.promocao = true
    }
})

console.log(products)


//----------- TEMPLATE LITERALS com backticks ``

const username = 'filipe'
const age = 32

console.log(`o nome do usuario é ${username} e ele tem ${age} anos`)


//------------- DESTRUCTURING - transformar os itens de um desses dados(obj ou arrays) em var

//COM ARRAYS
const frutas = ["laranja", "maça", "limao", "uva"]

const [f1, f2, f3] = frutas

console.log(f1) //laranja
console.log(f2) //maça
console.log(f3) //limao

//COM OBJETOS

const detalhesDoProduto = {
    name: "mouse",
    price: 39.99,
    category: "perifericos",
    cor: "gray"
}

const {name: nomeDoProduto, price, category: nomeDaCategoria, cor} = detalhesDoProduto
//name: nomeDoProduto e category: nomeDaCategoria - escolhendo outro nome de variavel e colocando em relação a chave

console.log(`${nomeDoProduto}, ${price}, ${nomeDaCategoria}, ${cor}`) //mouse, 39.99, perifericos, gray








