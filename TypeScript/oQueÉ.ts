//typescript é um superset de javascript - desde 2012
// uma extensão da linguagem, adicionando novas funcionalidades e recursos.
//especificar o tipo de dados estamos trabalhando, sendo assim podemos definir com clareza o que uma variavel está guardando.
//melhorar capacidade da lingua de aplicar POO

//o typescrit é convertido para js
// é um syntax sugar, necessario converter o code ts para js, trasnpilação

// VANTAGENS DE UTILIZAR O TS 

// 1 - TIPAGEM - adiciona tipoem nossas variaveis e facilita a leitura do codigo.

// mesmo não especificado o exemplo abaixo o js decidi internamente qual é o melhor tipo
// const name = "filipe"
// const age = 25

// ------------------------------------------
// '2' + 2 //22 - o js sabe qual o tipo de valor está lidando.
// -------------------------------------------------

// const fullName = (user) => {
//     return `${user.firstName} ${user.lastName}`
// }

// const user = {
//     firstName: "filipe",
//     middleName: "alves"  //nome errado
// }
//  fullName(user)

// trabalhando somente com JS não temos garantia que o objto passado como parametro irá conter ambas as prop necessaria.
// gera um bug pq o acesso a prop firstName e lastName retorna undefined.

// TS não força a tipagem, torna o code mais explicito, facil interpretação e evita Bug 


// COM TS 
// type User = {
//     firstName: string,
//     lastName: string
// }
// const fullName = (user: User): string => {
//     return `${user.firstName} ${user.lastName}`
// }


// 2 - Ajuda a descobrir falhas e bugs 
// - definir explicitamente os valores que estamos trabalhando reduz a probabilidade de bugs.

// const sum = (v1: number, v2: number): number => {
//     return v1 + v2;
// }

// const total = sum('2', 2) //da erro flando q tem qser number (Argument of type 'string' is not assignable to parameter of type 'number'.)

// 3 - comunicação entre equipes de devs 
// - diminui carga necessaria de interpretação.

// 4 - não altera perfomance mais aumenta a sua compatibilidade.















