//funcao fabrica - funcao q retorna um objto
const prod1 = {
    nome: '..',
    preco: 45
}

const prod2 = {
    nome: '..',
    preco: 1234
}

//repeticao de objtos, a funcao factory evita isso.

function criarPessoa() {
    return {
        nome: 'filipe',
        sobrenome: 'Alves'
    }
}

console.log(criarPessoa())// - cria novos objtos a partir da chamada da function
//{ nome: 'filipe', sobrenome: 'Alves' }


//>>com PARAMETRO
function criarProduto(nome, preco) {
    return {
        nome, 
        preco,
        desconto: 0.1 //nao recebeu como parametro, valor fixo no obj
    }
}

console.log(criarProduto('notebook', 2000.00))
console.log(criarProduto('ipad', 1000.00))
//{ nome: 'notebook', preco: 2000, desconto: 0.1 }
//{ nome: 'ipad', preco: 1000, desconto: 0.1 }