//optional Chaining - 

const user = {
    name: 'Filipe',
    age: 30,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
        },
};

document.body.innerText = user.address.street //Rua: Assad chadi

const user = {
    name: 'Filipe',
    age: 30,
        // adress:{
        //     street: 'Rua: Assad chadi',
        //     number: 33,
        // },
};

//qdo tento acessa uma propriedade do objeto a qual ela pode nao existir, eu sempre tenho que conseguir trabalhar com erros.

document.body.innerText = user.address ? user.address : 'Nao informado' //nao informado

const user = {
    name: 'Filipe',
    age: 30,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
            zip: {
                code: '20230294032',
                city: 'Cmota',
            }
        },
};

document.body.innerText = user.adress.zip.code //20230294032


const user = {
    name: 'Filipe',
    // age: 30,
    //     adress:{
    //         street: 'Rua: Assad chadi',
    //         number: 33,
    //         zip: {
    //             code: '20230294032',
    //             city: 'Cmota',
    //         }
    //     },
};

document.body.innerText = user.address 
? user.address.zip
 ?user.adress.zip.code
 : 'Nao informado'
: 'Nao informado' //Nao informado

//Pode ser feito de outra maneira ao inves desse de cima

document.body.innerText = user.address?.zip?.code ?? 'Nao informado'; //Nao informado

//QUANDO lido com possíveis objtos que podem ser nulos ou podem nao existir eu uso o optional chaining


const user = {
    name: 'Filipe',
    age: 30,
        // adress:{
        //     street: 'Rua: Assad chadi',
        //     number: 33,
        //     zip: {
        //         code: '20230294032',
        //         city: 'Cmota',
        //     }
        // },
        // showFullAdress() {
        //     return 'ok';
        // }
};

document.body.innerText = user.address?.showFullAdress(); //undefined - caso adress nao exista

const user = {
    name: 'Filipe',
    age: 30,
        adress:{
            street: 'Rua: Assad chadi',
            number: 33,
            zip: {
                code: '20230294032',
                city: 'Cmota',
            }
        },
        // showFullAdress() {
        //     return 'ok';
        // }
};

document.body.innerText = user.address?.showFullAdress(); //erro - caso a function nao exista
document.body.innerText = user.address?.showFullAdress?.(); //undefined 


const key = 'name';

document.body.innerText = user[key]; //Filipe - propriedade name do objto User com []


