const name = 'Filipe'
const message = `Bem vindo, ${name}`;

console.log(message) //Bem vindo, Filipe

//Condicinais dentro da template literals
const name = 'null'
const message = `Bem vindo, ${name ?? 'visitante'}`; //caso nome nao exista coloque visitante

console.log(message)//Bem vindo, visitante
