//Metodos de Array - Reduce - qdo quero pegar um array e quero criar algo novo.

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item //0,1undefined,2undefined,3undefined,4undefined,5undefined
}, 0)

const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item + '---'//0,1---0,2---0,3---0,4---0,5---
    return acc
}, 0)

const soma = array.reduce((acc, item) => {
    document.body.innerText += acc + ',' + item + '---'//0,1---1,2---3,3---6,4---10,5--- //somou com o item 0+1+2+3+4+5
    return acc + item
}, 0)

document.body.innerText = JSON.stringify(soma) //15 - 0+1+2+3+4+5

//acc - acumulator - objeto que to criando e cada info do array
//no caso quero somar 0+1+2+3+4+5, por isso começo com 0
//quisesse criar um objeto colocaria ao inves de 0 {}
 