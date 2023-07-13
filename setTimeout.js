// setTimeout(function, delay) - é uma funcao q recebe uma funcao e o tempo para ser executada.

setTimeout(function() { //function é uma callback executa depois de um certo tmepo
    console.log('depois de 1 segundo')
}, 1000) 

//o js le a function setTimeout e guarda ela para ser executada depois de 1000ms, ou seja, depois de 1 segundo aparece o console.log.

//pausado antes de 1 segundo - [Done] exited with code=null in 0.655 seconds