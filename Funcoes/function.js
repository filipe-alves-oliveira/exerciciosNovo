//criar um aplicativo de frases motivacionais

function createPhrases() {       //declarando a funcao
    console.log('Estudar é muito bom!')
    console.log('Paciencia é muito bom!')
    console.log('Revisar é muito bom!')
};

//executar a funcao, chamar a funcao

createPhrases() //chamando a function

//objetivo da funcao é agrupamento de code e reutilizacao.



//>> Funcao com Parametros

function comprimentarPessoa(nome) {      //nome - como se estivesse criando uma variavel que só existisse dentro da funcao
    console.log('Olá, ' + nome)       
}                                   

comprimentarPessoa("Filipe") //Olá Filipe
comprimentarPessoa("Maria") //Olá Maria

console.log(nome) //Undefined - nome é uma variavel que nao existe, esta apenas dentro da funcao



//-----OUTRO EXEMPLO
function run(fun){
    fun()
}

run(function () {console.log('executando...')}) //executando...



//----------funcao pode retornar/conter uma funcao
function soma(a, b) {
    return function(c){
        console.log(a + b + c)
    }
}

soma(2,3)(2)//7


