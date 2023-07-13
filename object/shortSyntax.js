//>>>>> Short Syntax

const name = 'Filipe';
const idade = 31;

const user = { //nome da propriedade igual nome da variavel, com isso posso utilizar a short syntax
    name: name,
    idade: idade,
};

const user = { //short syntax
    name,
    idade,
};

document.body.innerText = JSON.stringify(user)
// {
//     "name": "Filipe",
//     "idade": 31
// }