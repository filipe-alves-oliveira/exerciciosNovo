// par nome/valor, chave/valor

const saudacao = 'Opa' //contexto léxico - local do qual sua variavel foi definida fisicamente no seu código

function exec(){
    const saudacao = 'Fala' //contexto léxico 2 - definiu constante dentro da function
    return saudacao //contexto diferente da linha 3
}

//Objetos sao grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco:{
        rua:  'assad chadi',
        numero: 33
    }
}

console.log(saudacao) //Opa
console.log(exec()) //Falaa
console.log(cliente)
// {
//     nome: 'Pedro',
//     idade: 32,
//     peso: 90,
//     endereco: { rua: 'assad chadi', numero: 33 }
//   }









