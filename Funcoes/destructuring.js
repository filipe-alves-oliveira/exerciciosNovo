//>>Destructuring Function

//vou passar um objeto para minha function e dentro da function rand
//ao inves de acessar rand.min e rand.max, eu quero que ja tire do obj o atributo min e max, sem precisar de .
function rand({ min = 0, max = 1000}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand({ max: 50, min: 40})) //40, 41.. numero aleatorio entre 40 e 50

//tmb pode ser feito assim:
const obj = { max: 50, min: 40}
console.log(rand(obj)) //40, 41.. numero aleatorio entre 40 e 50

//ou tmb passa o valor de minimo e maximo (nao foi passado max por isso é 1000)
console.log(rand({ min: 955 })) //955, 956.. numero aleatorio entre 955 e 1000

//ou tmb assim: (nao foi passado nenhum  min e max vai de acordo com q esta la em cima)
console.log(rand({})) //gera numeros aleatorios entre 0 e 1000

//numeros randomicos sem nenhum obj
console.log(rand()) //erro - impossível desestruturar algo undefined ou null