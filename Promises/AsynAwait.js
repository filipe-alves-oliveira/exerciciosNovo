//>> Async Await - permite falar que a funcao é assincrona, demora para executar, promisse

async function buscaDadosNoGithub() {
    const response = await fetch('https://api.github.com/users/diego3g');
    const body = await response.json();
    console.log(body);
}

buscaDadosNoGithub(); //log do body do github

//>> fazendo com catch e finally

async function buscaDadosNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();
        console.log(body);
    } catch (err) {
        console.log(err);
    } finally {
        console.log(deu);
    }
}

buscaDadosNoGithub();

//Toda funcao que uso Async ela vira uma promise automaticamente 

async function buscaDadosNoGithub() {
    try {
        const response = await fetch('https://api.github.com/users/diego3g');
        const body = await response.json();
        return body.name; //tentando buscar nome do usuario
    } catch (err) {
        console.log(err);
    } finally {
        console.log(deu);//bloco q sera executado mesmo q ocorra erro ou nao, ele vai chamar esse bloco, se deu ok o try, ele chama o finnaly, se deu erro, ele chama o catch depois o finnaly
    }
}

const name = buscaDadosNoGithub();

console.log(name) //Promise - nao busco nome do usuario

buscaDadosNoGithub().then(name => {
    console.log(name) //busco nome - Diego 
});


//---------->>>>>>>>>>>>>>***************<<<<<<<<<<<<<<<<<<<<<<<<<

function imprimirNomeGritado(obj){
    console.log(obj.name.toUpperCase()+ '!!!!') //TypeError: Cannot read properties of undefined (reading 'toUpperCase') - toUpperCase() n foi definido
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)



//----------------------lançando erro com mensagem
function tratarErroELancar(erro){
    //trhow new Error('Ocorreu um Erro')
    //throw 10 //lançando erro com apenas trhow 10
    //throw 'mensagem' //lançando erro com apenas uma mensagem
    trhow { //colocando throw em um obj [object Object]
        nome: erro.name,
        msg: erro.mesage,
        date: new Date,
    }
}

function imprimirNomeGritado(obj){
    try {
    console.log(obj.name.toUpperCase()+ '!!!!') //trhow new Error('Ocorreu um Erro') - tendo erro ele cai no catch 
    } catch (e) {
        tratarErroELancar(e)
    } finally {
    console.log('final');//bloco q sera executado mesmo q ocorra erro ou nao, ele vai chamar esse bloco, se deu ok o try, ele chama o finnaly, se deu erro, ele chama o catch depois o finnaly
}
}

const obj = { nome: 'Roberto'}
imprimirNomeGritado(obj)

















