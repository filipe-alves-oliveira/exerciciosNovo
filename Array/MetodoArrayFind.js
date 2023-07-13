//Metodos de Array - Find - encontrar um item desse array
// método retorna o valor do primeiro elemento que passa no teste.
// método executa uma função para cada elemento do array.
// método retorna undefinedse nenhum elemento for encontrado.
// método não executa a função para elementos vazios.
// método não altera a matriz original.

const array = [1, 2, 3, 4, 5];

const par = array.find(item => item % 2 === 0);
 
//document.body.innerText = JSON.stringify(par) //2
console.log(par) //2 - econtrado o primeiro numero par que é 2 

//undefined - nao encontra nada 

//caso o numero 4 viesse primeiro o resultado seria 4.