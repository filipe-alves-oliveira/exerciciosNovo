//Metodos de Array - FindIndex - retorna o indice daquele valor procurado no array.
//método retorna o índice (posição) do primeiro elemento que passa no teste.
//método retorna -1 se nenhuma correspondência for encontrada.
//método não executa a função para elementos de array vazios.
//método não altera a matriz original.

const array = [1, 2, 3, 4, 5];

const par = array.findIndex( item => item % 2 === 0);
 
//document.body.innerText = JSON.stringify(par)
console.log(par) //4 - o indice de 2 é 1