//Promises - PROMESSAS - nem tudo na programacao é sincrono, acontece no mesmo momento que mandamos executar
//existem coisas que demoram para ser executadas, por isso nao podemos evitar que o restante do codigo nao seja executado
//até que aquilo nos devolva a resposta que esperamos.

//ex.: se quero buscar uma informacao de um servidor dos EUA, se busco no BR o tempo de resposta, latencia é menor.
//entao nao podemos ficar esperando que o codigo pare e espere buscar a info nos EUA.
//por isso existem situaçoes que sao assincronas, podem acontecer em paralelo e dar a tratativa correta quando terminar de acontecer

//temos o resultado de promisse atraves do .then ou .catch

const somaDoisNumeros = (a, b) => {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(a + b);
        //reject(a + b);
    }, 2000);
});
}

somaDoisNumeros(1, 3)
    .then(soma => {
console.log(soma)
}) //4
    .catch(err => {
    console.log(err)
})//4


fetch('https://api.github.com/users/diego3g')
        .then(response => {    
        console.log(response);
    })
        .catch(err => {
        console.log(err);
    })
//pegou todo conteudo do github

fetch('https://api.github.com/users/diego3g')
        .then(response => {    
        response.text().then(body => {
        console.log(body);
        })
    })
//pegou todo conteudo do body do github e colocou como texto


//>>Quando tem mais de uma promisse
fetch('https://api.github.com/users/diego3g')
.then(response => {
            return response.json()
})
.then(body => {
    console.log(body)
})
.finally(() => {
    console.log('deu')
})
//algo que vai ser executado independente se deu certo ou errado, porem sempre vai ser executado no final da promisse
















