//callback - chamar de volta - vou passar uma funcao e essa funcao será chamada quando um evento acontecer
//é uma funcao que ta passando como parametro para outra funcao 
//uma funcao que passa parametro para outra funcao

function sayMyName(name){
    console.log(name)//filipe
}

sayMyName('Filipe')
//sayMyName('Filipe')//dentro do '' posso passar qualquer coisa objeto {name: filipe}, number, e funçao().

// --------------------------------------
function sayMyName(name){ //chama a funcao sayMyName, depois chama a funcao name de volta em algum outro momento dentro da funcao sayMyName
    console.log('codigo antes de executar a funcao callback')
    name() //sayMyName
    console.log('depois de executar a callback')
}

sayMyName( //enviou a funcao como argumento para outra funcao e depos name() foi chamada de volta
    () => {
        console.log('estou em uma callback')
    }
)

//o codigo acima é essa situacao abaixo, por baixo dos panos, só foi simplificada da maneira acima
function sayMyName(name){ 
    console.log('codigo antes de executar a funcao callback')

    function name() {
        console.log('estou em uma callback')
    }

    console.log('depois de executar a callback')
}
sayMyName()

//>>>>>>>passando funcao:
function sayMyName(name){
    name()
}

sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)

//uma funcao passando parametro para outra funcao

//>> outro Exs.
const fabricantes = ['mercedes', 'audi', 'bmw']

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`) //pega o nome como o indice, ambos recebidos como parametros e imprimi o indice + 1 posicao 1 do array
}

fabricantes.forEach(imprimir) //forEach - funcao de fabricantes e fabricante é um array, para cada elemento do array chame e funcao imprimir, eo foreach passa como parametro para essa funcao o nome do elemento e o indice
// 1. mercedes        //registro do evento - imprimir - passado como parametro para o forEach 
// 2. audi
// 3. bmw

fabricantes.forEach(function(fabricante){
    console.log(fabricante) //fabricante é cada um dos elementos do array
})
// mercedes
// audi
// bmw

///>>chamada ajax, vc faz uma chamada ao servidor e ele dará a resposta quando a resposta chegar, sendo sucesso ou error

const notas = [1.1, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

//sem callback
const notasBaixas1 = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1) //[ 1.1, 6.5, 5.2, 3.6 ]

//com callback
const notasBaixas2 = notas.filter(function (nota){ //filtrar os elementos de um array em cima de um determinado criterio, vai ser uma funcao callback q vai retornar true ou false, cada elemento chamara essa funcao, se retornar true adc ao novo array se false nao adiciona.
    return nota < 7 //nota <7 vdd, elemento consta no array final, se >7, false.
}) 

console.log(notasBaixas2) //[ 1.1, 6.5, 5.2, 3.6 ]

//com arrow function
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3) //[ 1.1, 6.5, 5.2, 3.6 ]


//EXEMPLO DE CALLBACK NO BROWSER
document.getElementsByTagName('body')[0].onclick = function (e) { //--acessa os elementos atraves de uma tag passando por parametro o elemento q quero body e a resposta é um array
    console.log('o evento ocorreu')        //function q recebe como parametro um e - evento
} 
//callback registrada e no browser quando clico o evento ocorre no console - o evento ocorreu


//EXEMPLO

const https = require('https')
const API = 'https://jsonplaceholder...'

https.get(API, res => {
    console.log(es.statusCode)
})
console.log('conectando API')

//CONECTANDO API 
//200
//- o js executa linha a linha, mas primeiro aparece conectando API e depois o 200, pq .get é uma calback
//e nao sei como ela funciona por debaixo dos panos, q vai executar depois de um certo tempo, ele conecta depois executa a funcao


//------------->>>>>OUTROS EXEMPLOS - devSamurai - JS avançado 

//funcao callback - chama a func, criada abaixo(linha128), dentro do for (linha123), ou seja,  executa a linha 128 e volta no fluxo na linha 123

function mult(values, func) {//mult recebe o array values
    console.log(arguments) // [2, 4, 6, 8, 10] e (n) => n * 2
    for(let i = 0; 1 < values.length; i++) {
        values[i] = func(values[i]) // n *= n
    }
    return values
}
const values = [1, 2, 3, 4, 5]
const func = (n) => n * 2

console.log(mult(values, func)) //[2, 4, 6, 8, 10]

// ou pode ser feito da maneira abaixo passar o func direto dentro de mult

function mult(values, func) {//mult recebe o array values
    for(let i = 0; 1 < values.length; i++) {
        values[i] = func(values[i]) // n *= n
    }
    return values
}
const values = [1, 2, 3, 4, 5]
//const func = (n) => n * 2

console.log(mult(values, (n) => n * 2)) //[2, 4, 6, 8, 10]