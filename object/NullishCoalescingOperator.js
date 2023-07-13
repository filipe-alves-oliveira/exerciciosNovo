//>>> Nullish Coalescing Operator //operador para lidar com valores nulos


const idade = null;

//qual o valor default(predefinida) para uma varivel quando ela nao for setada, uma das formas
//é utilizar o operador ou || 

document.body.innerText = 'Sua idade é: ' + (idade || 'Nao informada'); //Nao informada
//ele pula a varivel idade e pega o 'Nao informada', mesmo que 
// 0, '', [], false, undefined, null todos esses sao FALSO qdo usamos || 


const idade = 0;

document.body.innerText = 'Sua idade é: ' + (idade ?? 'Nao informada'); 
//nesse caso olha apenas para valores que nao sao validos, mais restritivo,
//que nao tem valor significativo, null, undefined, 0 é um valor real definido.
//se a variavel idade for 0, temos - Sua idade é: 0