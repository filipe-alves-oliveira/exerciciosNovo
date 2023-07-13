//Metodo Every(todos) - retorna um booleano True ou False

const array = [1, 2, 3, 4, 5, 'teste'];

//Retorna True caso todos os itens, Every, satisfazem uma condiçao
const todosItensSaoNumeros = array.every(item => typeof item === 'number');

console.log(todosItensSaoNumeros) //False - pq teste nao é number