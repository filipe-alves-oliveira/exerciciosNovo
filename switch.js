//para cada case vc pode colocar uma sentença de codigo.
//para um comportamento adequado vc passa o valor, ele executa apenas aquele case e sai
//ele so sai do switch sem executar os debaixo usando o break
//se nao colocar o break todos os cases que tao abaixo vai ser executado.


const imprimirResultado = function(nota){
    switch (Math.floor(nota)){ //.floor arredonda pra baixo
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperacao')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
        default:
            console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)//arrendonda pra baixo
imprimirResultado(6.55)
imprimirResultado(2.3)
imprimirResultado(-1)

// Quadro de honra
// Aprovado
// Recuperacao
// Reprovado
// Nota Inválida
// Nota Inválida












