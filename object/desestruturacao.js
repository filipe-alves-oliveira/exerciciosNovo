
//>> Desestruturacao - remover parte de um objt para uma variavel a parte

const user = {
    name: 'Filipe',
  //nickaname: "Alves"
    idade: 31,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
        },
};

const address = user.address

document.body.innerText = JSON.stringify(address) //stringify() converte valores em javascript para uma String JSON.
//  {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     }


//OUTRA forma podemos colocar - mesmo resultado de cima
const{ address } = user 
document.body.innerText = JSON.stringify(address)
// {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     }

const{ address, idade } = user 
document.body.innerText = JSON.stringify({ address, idade })
// {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     },
//          "idade":  31
// }

const{ address, idade: age } = user  //renomear variavies troca idade por age
document.body.innerText = JSON.stringify({ address, age })
// {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     },
//          "age":  31
// }

const{ address, idade: age } = user //setar valores default, que nao existe, para variaveis
document.body.innerText = JSON.stringify({ address, age, nickname })
// {
//         "street": "Rua: Assad chadi",
//         "number": 33,
//     },
//          "idade":  31
//          "nickaname": "Alves"
// }

//se alterar no objet user mostra o que está no objeto criado nao o que foi passar


//>>>>Em Funcoes 

function mostraIdade(user) {   //(user) - recebe o objeto do user
    return user.idade
}
document.body.innerText = mostraIdade(user) //31

//desestruturacao por ser usado em todo lugar que tenha referencia para um objeto.

function mostraIdade({ idade }) {   //no lugar de (user), coloco chaves e desestruturo o usuario, pegando apenas a idade do usuario que to passando para essa funcao
    return idade
}
document.body.innerText = mostraIdade(user) //31


//>>>>>Rest - Operator - Operador de resto.

const { name, ...rest } = user;  //desestruturo a propriedade name desse usuario e pego o resto utilizo ... para pegar o resto das informacoes a partir do name 

document.body.innerText = JSON.stringify(rest)
// {
//          "idade":  31
//          "nickname": "Alves"
//     "adress": {,
//         "street": "Rua: Assad chadi",
//         "number": 33,
// }}
//O resto das propriedades do User menos a name que foi tirada

const { name,idade ...rest } = user;   

document.body.innerText = JSON.stringify(rest)
// {
//          "nickname": "Alves"
//     "adress": {,
//         "street": "Rua: Assad chadi",
//         "number": 33,
// }}
//O resto das propriedades do User menos a name e idade


//>>>>Utilizando Operador REST para ARRAYS

const array = [1, 2, 3, 4, 5];

const first = array[0]; //0 - pegando o 1 elemento
const seconds = array[1]; //1 - pegando o 2 elemento

document.body.innerText = JSON.stringify(rest)


const [first, second] = array;

document.body.innerText = JSON.stringify({ first, second }) //primeiro item do array para variavel first, segundo para variavel second e assim por diante
// {
//     "first": 1,
//     "second": 2
// }

//se quiser o resto do array coloca ...rest

//>>Pular um indice do array

const [first, , second, ...rest] = array;

document.body.innerText = JSON.stringify({ first, third, rest }) 



//>> desestruturar o Array usando apenas uma unica atribuicao, variavel.

const [a] = [10] //colocando [ ] do lado direito (operador destructuring), significa que vai fazer uma desestruturacao

    //0, 1, 2..                  //0, 1, 2..
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8] //n5  
console.log(n1, n3, n5, n6)  //10 9 undefined 0
//n3 - 3 elemento - indice 2
//n5 - ignorado - undefined fora do array
//n6 - colocou valor padrao = 0


//>> desestruturando outros elementos do array
const [,[, nota]] = [[, 8, 8], [9, 6, 8]]//estou ignorando o primeiro elemento e estou pegando o 2 elemento do 2 array q ta dentro de um array
//o valor que ira pegar é o 6

console.log(nota)















