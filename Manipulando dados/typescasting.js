// TYPE CASTING VS TYPE COERSION

//type conversion (typecasting) - alteracao de um tipo de dado para outro tipo.
//Type coersion - js implicitamente fazendo essa troca, entretanto o js usa o type conversion.

//conversion - capacidade nossa de causar uma conversao
//coersion - capacidade do js de forçar uma troca - feita pela Virtual Machine.

//Coersao COERSITIVA de tipo - Type coersion
console.log('9' + 5) //concat 95 - string+number - 
//o js fez uma coersao trnasformou o number para string para que o programa nao desse problema.

//manual - type conversion ou typecasting - eu mudo.
//usando uma conversao de tipo number o js entendeu que era pra fazer a soma
console.log(Number('9') + 5)  //14