//Manipulando Strings e números 


//***Transformar String em Número e Número em Strings.
let string = "123"
console.log(Number(string)) //123 - cor colorida com number.

let number = 321
console.log(String(number)) //321 - cor branca


//***Contar qtos caracteres tem uma palavra e qtos digitos tem um numero.
let word = "Paralelepipedo"
console.log(word.length) //14 caracteres

let number = 1234
console.log(number.length) // undefined - number nao recebe o length
//podemos entao transformar em uma string.
console.log(String(number).length) //4


//***Transformar um numero quebrado com 2 casas decimais e trocar ponto por virgula.
let number = 122.1231231
console.log(number.toFixed(2)) //122.12 - toFixed é uma funcao atrelada ao obj number, chamamos isso de METODO.
console.log(number.toFixed(2).replace(".",",")) //122,12 - trocando ponto por virgula - virou um dado string (pela coloracao no console)
//se quisesse number era só colocar number *NAO* - console.log(Number(number.toFixed(2).replace(".",","))) // NaN - a virgula nao faz parte de um numero

//Podemos atrelar vários metodos a funcionalidade.
//Console é um objeto que tem um metodo, ou seja, uma funcionalidade .log que é escrever no console qualquer coisa que eu passar como argumento.


//***Transformar letras minusculas em MAIUSCULAS e o contrário.

let letra = "filipe"
console.log(letra.toUpperCase()) // FILIPE

let letra = "FILIPE"
console.log(letra.toLowerCase()) //filipe

//no caso tenho um obj do tipo string letra, que chama um metodo retorna uma string 


//***split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array.
let phrase = "Filipe Alves de Oliveira."
let myArray = phrase.split(" ")

console.log(myArray)
//['Filipe', 'Alves', 'de', 'Oliveira.']
// 0:"Filipe"
// 1:"Alves"
// 2:"de"
// 3:"Oliveira."


//***Tirando espaços e colocando _
let phraseWithUndersore = myArray.join("_") //join - juntar tudo - 
console.log(phraseWithUndersore) //filipe_alves_de_oliveira.


//***Verificar se Texto contem palavra especifica

let phrase = "Filipe Alves de Oliveira."
console.log(phrase.includes("lima")) //verificando se tem lima - false
//includes é caseSensitive


//***Criar Array com Construtor

let myArray = new Array ('a', 'b', 'c')
console.log(myArray) //['a', 'b', 'c'], cada elemento virará um argumento no meu Array



//***Contar elementos de um array
console.log(['a', 'b', 'c'].length) 
//nao faz diferença se colocar aspas simples ou dupla, pq cada elemto do array 
//pode ser um tipo de dado diferente, inclusive uma function, tmb pode haver quebra de linha
//console.log(["a", 
            //{type:"array"}, 
            //function() { return "alo"}
//][2]()) - acessou o elemento 2 e retornou a function - alo


//***Transformando uma cadeia de caracteres em elementos de um array
let word = 'manipulacao'

console.log(Array.from(word)) // ["m", "a", "n", "i",...]


//***Adicionar itens no array
let techs = ["html", "css", "js"]

console.log(techs.push(nodejs)) //add no fim ["html", "css", "js", "nodejs"]

console.log(techs.unshift(nodejs)) //add no inicio ["nodejs", "html", "css", "js"]

console.log(techs.pop()) //remove do final ["html", "css"] - nao precisa nem falar, ja remove do final

console.log(techs.shift()) //remove do inicio ["css"] - nao precisa nem falar, ja remove do comeco

console.log(techs.slice(1, 3)) //remove o elemento 1 do array de 3 posiçoes ou até onde quero q ele vá ..(1, 2) remove o elemento 1 do array de 2 posiçoes

console.log(techs.splice(1)) //remover 1 ou mais itens de qualquer posicao do array - ["html", "js"] ou ...(1, 2) - ["html"]

let index = techs.indexOf('css')
console.log(index) //encontar a posiçao de um elemento no array - 2







