//for - geralmente usado quando sabemos quando elementos temos em uma lista.

const listaDeCompras = ["Arroz", "Batata", "Maça"];

for (let indice = 0; indice < listaDeCompras.length; indice++) {
    console.log(listaDeCompras[indice]); //arroz batata maca
}

//Quando queremos passar popr todos os elementos da lista sem saber a posiçao, indice.

for (let item of listaDeCompras) {                //para cada item da listaDeCompras (array - iteravel, que pode percorrer)
    console.log(item) //arroz batata maca         //percorre todo o array e a cada iteracao ele guarda na variavel item oq tiver no array
}                                                 //1 vez item = arroz, 2 item = batata, 3 item = maca 






















