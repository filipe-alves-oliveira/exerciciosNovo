//Loop while - Usado quando NAO se sabe quando elementos tenho em um array ou lista.
//varrer um array, ver se tenho um determinado item na lista

const listaDeCompras = ["Arroz", "Batata", "Maça"];

console.log(listaDeCompras[0]); //Arroz - acessando indice 0 do array

//aumentando o indice até chegar o tamanho maximo do array

while (true) {   //enquanto o que ta dentro do (true) for vdd ele vai ser executado
    console.log("Estou em loop infinito")
}

let numero = 0;
while (numero <= 100) {  
    console.log(numero); //soma 1 ao numero, 0,1,2.. até 100
    numero++;             
}


//imprimindo lista de compras
let indice = 0;
while (numero <= 100) {  
    console.log(listaDeCompras[indice]); //arroz batata maca undefined undefined ... - undefined pq nao esta definido
    numero++;                            //o restante do array
}

//fazendo até o ultimo da lista
let indice = 0;
while (numero < listaDeCompras.length) {  
    console.log(listaDeCompras[indice]); // arroz batata maca - .length tamanho maximo do array, mesmo se incrementar mais.
    numero++;                            
}










