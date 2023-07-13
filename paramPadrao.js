//Parametro Padrao - antes e depois da ES2015


//>>>>>>>EXEMPLOS ANTES DO ES2015
//1) - Para gerar valor padrao (usar operador || par ter o efeito o efeito de um valor padrao para uma variavel q nao esta setada)
//qdo o valor ta null ou undefined ele vai para o segundo operando da operacao ou caso a 1 parte seja false.

function soma1(a, b, c){ 
    a = a || 1
    b = b || 1 //se b for false retorna o 2 operando
    c = c || 1 
    return a + b + c
}

console.log(soma1()) //3 - como a, b E c é undefined o passou o valor padrao 1 e somou os 3
console.log(soma1(), soma1(3)) //5 - o primeiro A recebe 3 e os outros b e c como nao foi passado recebe 1
console.log(soma1(), soma1(3), soma1(1, 2, 3)) //6
console.log(soma1(0, 0, 0)) //3 - retorna false e retorna o valor padrao 1


//2) - 2, 3 e 4 para gerar valor padrao
function soma2(a, b, c){ 
    a = a !== undefined ? a : 1 //para gerar valor padrao caso a nao seja informado
    b = 1 in arguments ? b : 1 //existe o 2 argumento q foi passado pra funcao soma2, ou seja, dentro de arguments existe o indice 1, se existir pegue o valor de b else pegue 1 
    c = isNaN(c) ? 1 : c  ////se a variavel c é NaN retorne o padrao e caso ela seje um number retorne c ******MAIS SEGURA, porque se esta querendo somar valores, vc espera que o q venha seja um valor numerico e nao um string ou outra coisa
    return a + b + c
}

console.log(soma2()) //3 - como a, b E c é undefined o passou o valor padrao 1 e somou os 3
console.log(soma2(3)) //5 - o primeiro A recebe 3 e os outros b e c como nao foi passado recebe 1
console.log(soma2(1, 2, 3)) //6
console.log(soma2(0, 0, 0)) //0 - pq é um numero



//>>>>>>>EXEMPLOS DEPOIS DO ES2015 - nao gera mais confusao e bug como ..(soma2(0, 0, 0))
//o ES2015 trouxe valores padrao

function soma3(a = 1, b = 1, c = 1){
    return a + b + c
}

console.log(soma3()) //3 - como a, b E c é undefined o passou o valor padrao 1 e somou os 3
console.log(soma3(3)) //5 - o primeiro A recebe 3 e os outros b e c como nao foi passado recebe 1
console.log(soma3(1, 2, 3)) //6
console.log(soma3(0, 0, 0)) //0 - pq é um numero






