
// nome = "joao"

// console.log(typeof nome) //saber o tipo que é a string

// // let age = 31
// // let isHuman = true

// let age, isHuman
// age = 18
// isHuman = true

// console.log(nome,', ' +age,', ' + isHuman)  //-> multiplos argumentos na funçao
// console.log('O ' + nome + ' tem ' + age + ' anos.') //-> escrita do texto + variáveis concatenando valores

// //interpolando valores com templates strings
// console.log(`O ${nome} tem ${age} anos.`)

var pessoas = [ 
    { nome: 'Joao', num: 1     },
    { nome: 'Maria', num: 2     },
    { nome: 'Fulano', num: 3    }
    ];

function compare(a, b) {
  if (a.nome < b.nome)
     return -1;
  if (a.nome > b.nome)
    return 1;
  return 0;
}

console.log(compare(3, 3));
