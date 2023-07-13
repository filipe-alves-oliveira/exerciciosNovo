//Some - Verifica se apenas um item satisfaz a condicao

const array = [1, 2, 3, 4, 5, 'teste'];

//Retorna True caso todos os itens, Every, satisfazem uma condiçao
const peloMenosUmItemNaoEUmNumero = array.some(item => {
    return typeof item !== 'number';
});

document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero) //true - pelo menos um item do array nao é numero - teste