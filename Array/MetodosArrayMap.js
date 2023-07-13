//Metodos de Array - MAP

const array = [1, 2, 3, 4, 5];

//>>percorrendo um array 
for(const i of array){
    document.body.innerText += i; //12345
}

array.forEach(item =>{
    document.body.innerText += item; //12345
})


const novoArray = [];
arrayy.forEach(item => {
    novoArray.push(item * 2);
}) 
document.body.innerText = JSON.stringify(novoArray) //[2,4,6,8,10]

//mesmo de cima só que usa o map - consigo ter um return dentro do meu metodo para algum 
//elemento por fora do map conseguir obter info de dentro dele.
const novoArray = array.map(item => {
    return item * 2;
})
document.body.innerText = JSON.stringify(novoArray) //[2,4,6,8,10]


//>>Com condicionais
const novoArray = array.map(item => {
    if (item % 2 === 0) {
        return item * 10;
    }
        return item
})
document.body.innerText = JSON.stringify(novoArray) //[1,20,3,40,5]






















