let subject = 'create video'

function createThink() {  //ao declarar a function ele sobscreve pegando o subject passado a baixo.
    subject = 'study'  //só existe um novo subject se por acaso passar como argumento da function anonima(sem nome )
    return subject
}

console.log(createThink(subject)) //study
console.log(subject); //study

//desconsidera a let de cima ao executar a funcao ele sobscreve pegando o subject do escopo anterior
//só existe um novo subject se coloca ele como parametro da funcao.

//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
let subject 

function createThink() {  
    subject = 'study'  
    return subject
}

console.log(subject);  //undefined - comeca o pensamento
console.log(createThink())  //study - cria o pensamento - retorno da funcao
console.log(subject); //study - pega o pensamento

//TODA FUNCAO QUE NAO TEM RETORNO É UNDEFINED