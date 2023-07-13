//comparacao do tipo & (tem q ter dois V para ser V, basta um F para ser F) - Operador Binário
// uma coisa tem que acontecer E outra deve acontecer para que seja viavel 
//só vou sair de casa SE tiver grana na conta E nao tiver chovendo 
// V e V -> V
// V e F -> F
// F e ? -> F (primeiro sendo false nao precisa nem comparar

//Comparacao do tipo OU (basta 1 V para ser V) - Operador Binário
//vou sair se tiver dinheiro OU se o cartao tiver liberado
// V ou ? -> V (nao preciso analisar pq a partir do 1 ja sei que é V)
// F ou V -> V 
// F ou F -> F

//** OU Exclusivo (os dois tem que ser diferentes para ser V) - Operador Binário
// V xor(exclusivo) V -> F
// V xor(exclusivo) F -> V
// F xor(exclusivo) V -> V
// F xor(exclusivo) F -> F

// negacao logica - Operador unario, opera sobre apenas um operando
//!V -> F
//!F -> V

// || - pipes - le-se paipes

//>>>>>*****-----------------------
//ex.: Tenho Dois trabalhos - 1 na terca e 1 na quinta, para ser executado
//SE trabalho 1 E trabalho 2 der certo fds vai comprar uma tv 50 polegadas E tomar sorvete
//Deu certo trabalho na terca E trabalho na quinta - no fds compra tv de 50 polegadas (Operador E - basta 1 F para ser F)
//DEu certo trabalho na terca OU na quinta - no fds compra tv de 32 polegadas, pq so um deu dos trabalhos deu certo (Operador OU xor(exclusivo))
//Nao deu certo nenhum dos trabalho nao compra nenhuma TV, nem toma sorvete
//OU - tomar sorvete 
//E - TV 50
//OU xor - TV 32

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 //operacao ou - se um dois trab deu certo(V), nem precisa olhar para o outro, vai tomar sorvete
    const comprarTv50 = trabalho1 && trabalho2 //operacao e - so compra se os dois trab der certo(V), se o trabalho1 for V precisa analisar o trabalho2, se o trabalho1 for F, nem precisa analisar o trabalho2 pq nao vai comprar
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) //bitwise xor(ou exclusivo) - mesmo que debaixo
    const comprarTv32 = trabalho1 != trabalho2 //trabalho1 for diferente de trabalho2, V dif F = xor, F dif V = xor, F F é igual e V V é igual 
    manterSaudavel = !comprarSorvete
    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } //obj - colecao chave valor

    // return { //mesmo exemplo de cima, mas de uma forma simplificado introduzida no ES6.
    //     comprarSorvete: comprarSorvete
    //     comprarTv50: comprarTv50
    //     comprarTv32: comprarTv32
    //     manterSaudavel: manterSaudavel
    // }
}

console.log(compras(true, true))
// {
//     comprarSorvete: true,
//     comprarTv50: true,
//     comprarTv32: false,
//     manterSaudavel: false
//   }

console.log(compras(true, false))
// {
//     comprarSorvete: true,
//     comprarTv50: false,
//     comprarTv32: true,
//     manterSaudavel: false
//   }
console.log(compras(false,true))
// {
//     comprarSorvete: true,
//     comprarTv50: false,
//     comprarTv32: true,
//     manterSaudavel: false
//   }

console.log(compras(false, false))
// {
//     comprarSorvete: false,
//     comprarTv50: false,
//     comprarTv32: false,
//     manterSaudavel: true
//   }

//>>>>>*****-----------------------

const pessoa = {
    nome: 'Filipe',
    idade: 31,
    ehMaiorDeIdade: true,
    altura: 1.81,
    temPassaporte: false,
};

//idade minima = 12
//altura minima = 1.4

if (pessoa.idade > 12){
    if (pessoa.altura > 1.4){
        console.log(`${pessoa.nome} pode brincar.`);  //Filipe pode brincar
        } else {
            console.log(`${pessoa.nome} nao pode brincar pq nao tem altura minima`) }
    } else {
        console.log(`${pessoa.nome} nao pode brincar pq nao tem idade minima`)
    }

//quando coloco o segundo else a primeira verificacao passa a ser false

//Validacao só sendo TRUE

// duas verdades - quando a idade é maior && e altura maior
// uma ou outra coisa acontece - quando a idade é maior || a altura é maior
// negaçao - quando alguma coisa nao acontece - ! 

if (pessoa.idade > 12 && pessoa.altura > 1.4){   //se as duas forem true da true, se nao da false, entrando no 2 else (basta um F para ser F)
        console.log(`${pessoa.nome} pode brincar.`);  //nao da pra saber se nao pode brincar por causa da idade ou altura
} else {          
    console.log(`${pessoa.nome} nao pode brincar`) //mas sabe que nao pode brincar entao entra nesse else.
}


if (pessoa.idade > 12 || pessoa.altura > 1.4){     //executado quando um dos dois for true (basta um V para ser V)
    console.log(`${pessoa.nome} pode brincar.`);  // (true || true ) - executa esse - Filipe pode brincar
} else {
console.log(`${pessoa.nome} nao pode brincar`) //Se nao executa esse - Filipe nao pode brincar
}


if (pessoa.temPassaporte){    
    console.log(`Pode viajar.`);  // true
} else {
console.log(`Nao pode viajar`) //false - Nao pode viajar. - temPassaporte tem valor FALSE no obj
}


//usando Operador logico de negacao
if (!pessoa.temPassaporte){    //temPassaporte tem valor FALSE no obj, o que estou fazendo é invertendo o valor com ! sendo TRUE
    console.log("nao pode viajar") //nao pode viajar
}




