//>> trocar qdo o max for menor que o min

function rand([min = 0, max = 1000]) {
    if(min > max) [min, max] = [max, min]  //se min > max inverte as variaveis. [min, max] (operador destructuring) = [max, min] (criando um array)
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor) //.floor arredonda pra baixo
}

console.log(rand([50, 40])) //48, 44.. passou primeiro o max depois min., ai trocou - como chamo parte do array nao uso o nome do atributo do obj 

console.log(rand([992])) //998, 993.. assume por padrao 1000 como max.

console.log(rand([, 10])) //0, 8, 5.. - passando um maximo e assumo min. como 0

console.log(rand([])) //500, 549..- valor padrao entre 0 e 1000

console.log(rand()) //undefined - impossivel desestruturar algo que é nulo ou undefined

//-=-=-=-=-=-=-=-=-=-==-==-=-=-=-=-=-=OUTROS EXEMPLOS-=-=--=-=-=-=-=-=-=-=

function myFunction() {
    const x = 10
    const y = 400

    return [x, y]
}

const [x, y] = myFunction()
console.log("x", x) // x 10
console.log("y", y) // y 400


