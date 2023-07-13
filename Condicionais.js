const pessoa = {
    nome: 'Filipe',
    idade: 31,
    ehMaiorDeIdade: true,
    altura: 1.81
};

if (pessoa.idade >= 18 ){
    console.log('Maior de idade')  //Maior de idade
};

//se dentro do if for FALSE nao executa nada, o if precisa ser TRUE para exibir a msg.
//Para executar o que esta dentro do if caso for FALSE usamos o Else.

if (pessoa.idade >= 18 ){
    console.log('Maior de idade')  //Maior de idade
} else {
    console.log('Menor de idade')
};


if (pessoa.idade <= 18 ){
    console.log('Entrou no if')  
} else {
    console.log('Entrou no else') //Entrou no else
};

// == verdadeiro
// === identico
console.log('1' == 1) //true - conteudo igual os dois é 1
console.log('1' === 1) //false - conteudo igual (1) e tipo diferente (string e number)


//!= diferente - false 
//!== nao identico ou estritamente diferente - false
console.log('3' != 3) //false - seria true mas com !, ficou false, pq sao iguais, está comparando apenas conteudo (! - inverte)
console.log('3' !== 3) //true - seria false mas com !, ficou true.

//!false - true
//!true - false

if (pessoa.idade < 18 ){
    console.log(pessoa.nome + 'é menor de idade');
} else if (pessoa.idade < 60 ){
    console.log(`${pessoa.nome} é Adulta`);
} else {
    console.log('A pessoa é Idosa');
};


//>> Comparacao de referencia de memoria - qdo trabalho com variavel de referencia de memória nao importa se usa 2 == ou 3 ===
const d1 = new Date(0) //0 - data de referencia 1/1/1970
const d2 = new Date(0) 

console.log(d1 === d2) //false 
console.log(d1 !== d2) //false

console.log(d1.getTime() == d2.getTime()) //true - compara o number até os milissegundos da data de referencia

console.log(undefined == null) //true
console.log(undefined === null) //false

//A DEFINICAO DE NULL É QDO NAO QUERO Q APONTE PARA NNEHUM LOCAL DA MEMORIA 


//MAIS EXEMPLOS DE IF****************

function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com ' + nota) //Aprovado com 7.1
    }
}

soBoaNoticia(7.1) //Aprovado com 7.1
soBoaNoticia(6.1) //nao executado pq nota foi menor


//o caso abaixo nao tem nenhuma relacao tem apenas a palavra valor
//nesse contexto mesmo que passe um string, array ou obj o JS entende que dentro (valor) tem que ser V ou F, pegando o valor
//e convertendo para V ou F e imprime no console se for True, caso false nao aparce nada
function seForVerdadeEuFalo(valor){
    if(valor){
        console.log('É verdade ...' + valor)
    }
}

seForVerdadeEuFalo() //Undefined - falso - nao aparece nada
seForVerdadeEuFalo(null) //false - nao aparece nada
seForVerdadeEuFalo(undefined) //false - nao aparece nada
seForVerdadeEuFalo(NaN) //false - nao aparece nada
seForVerdadeEuFalo('') //false - nao aparece nada
seForVerdadeEuFalo(0) //false - nao aparece nada
seForVerdadeEuFalo(-1) //É verdade ...-1
seForVerdadeEuFalo(' ') //É verdade ... - string preenchida, nao é vazia
seForVerdadeEuFalo('?') //É verdade ...?
seForVerdadeEuFalo([]) //É verdade ...
seForVerdadeEuFalo([1, 2]) //É verdade ...1,2
seForVerdadeEuFalo({}) //É verdade ...[object Object]


//{} - é opcional dentro de um codigo if 


//---só o primeiro console refere-se ao if
//a segunda sentenca é executada sempre 
function teste1(num) {
    if(num > 7)
    console.log(num)
    console.log('fim')
}

teste1(6)
teste1(8)
// fim
// 8
// fim


//------imprime os dois, mesmo 6 sendo maior do que 7 pq o bloco de codigo do console nao esta associado ao if 
//e vc tem uma sentenca de codigo vazia q termina com ;(sentenca de codigo vazia) e esta associada ao if e nao faz nada
function teste2(num){
    if(num > 7)
    ; 
    
    {
        console.log(num)
    }
}

teste2(6)
teste2(8)
// 6
// 8

//---------------OUTRO CASO

Number.prototype.entre = function (inicio, fim){
    return this >= inicio && this <= fim
}

const imprimirResultado = function(nota){
    if (nota.entre(9, 10)) {
        console.log('ok')
    } else if(nota.entre(7, 8.99)){
        console.log('aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('recuperacao')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    }else {
        console.log('Nota inválida.')
    }
    console.log('fim')
}

imprimirResultado(9.1)//ok fim
imprimirResultado(7.1)//aprovado fim
imprimirResultado(4.1)//recuperacao fim
imprimirResultado(0.1)//reprovado fim
imprimirResultado(1111)//Nota inválida. fim







