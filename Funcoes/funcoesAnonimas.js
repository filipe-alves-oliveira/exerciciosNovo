//Funcao anonima - Funcao sem nome - simplesmente isso.
const soma  = function (x, y){
    return x+ y
}

imprimirResultado =function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4) //7
imprimirResultado(3, 4, soma) //7 - soma = default
imprimirResultado(3, 4, function(x, y){  //3 parametros, passando uma funcao anonima para outra funcao.
    return x - y
}) //-1
imprimirResultado(3, 4, (x, y) => x * y) //com arrow function - sempre anonima.

//>>criando funcao anonima dentro de um obj
const pessoa = {
    falar: function (){
        console.log('Opa')
    }
}

pessoa.falar() //Opa - acessando funcao anonima a partir do atributo do objt que definiu (pessoa.falar)







