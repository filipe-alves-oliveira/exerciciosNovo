const valor = 'Global' 

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()

//qdo chamo exec ele declara uma cosnt chamada valor e executa minhaFuncao
//qdo executa minhaFuncao ele procura uma const valor para imprimir no console
//por conta da forma q foi escrita ele executa o valor global, pq ela nao tem apenas a forma q foi escrita, seu conteudo interno
//ela tem consciencia no local q foi definida, contexto no qual foi declarada.
//ela procura nao no local de execucao da funcao, mas sim no local onde foi definida 

//>>>>CLOSURES.
//é um escopo criado qdo uma funcao é declarada
//esse escopo permite a funcao acessar e manipular variaveis externas a funcao

//contexto léxico em acao

const x = 'global'

function fora() {
    const x = 'local'
    function dentro(){
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao()) //fora - memoria, pq local fisico q a funcao foi declarada, onde foi declarada.
//carrega consigo o escopo mais externo a funcao.







