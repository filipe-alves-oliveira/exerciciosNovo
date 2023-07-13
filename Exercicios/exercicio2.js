//01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
//multiplicação e divisão desses valores.

const calcula = (n1, n2) => {
    console.log(`
    Soma: ${n1} + ${n2} =  ${n1 + n2}
    subtração: ${n1} - ${n2} =  ${n1 - n2}
	Multiplicação: ${n1} * ${n2} =  ${n1 * n2}
	Divisão: ${n1} / ${n2} =  ${n1 / n2}
    `)
}

calcula(2, 3)

// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
// Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
// ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
// triângulo).

const typeTriangle = (a, b, c) => {
  if (a < (b + c) && b < (a + c) && c < (a + b)) {
    if (a == b && b == c) {
      console.log('Triângulo equilátero');
    }
    else if (a == b || a == c || c == b) {
      console.log('Triângulo isóceles');
    }
    else {
      console.log('Triângulo escaleno');
    }

  }
}

  typeTriangle(10, 5, 10);
  typeTriangle(10, 10, 10);
  typeTriangle(3, 4, 5);

//03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
function divisao(dividendo, divisor) {
  console.log("Resultado: " + Math.floor(dividendo / divisor));
  console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)

//4) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
//e o resto da divisão destes dois valores.

function divisao(dividendo, divisor){
  console.log(`O resultado da divisao é ${dividendo / divisor}`)
  console.log(`O resto da divisao é ${dividendo % divisor}`)
}

divisao(10, 2)
divisao(10, 3)

//5) Desenvolva uma função JavaScript para
//que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).

//com const
const soma = (num1, num2) => {
  return num1 + num2
}

console.log(`O valor em R$ é ${soma(0.1, 0.2).toFixed(2).toString().replace('.', ',')}`)

//com function
function soma (num1, num2){
  return num1 + num2
}

console.log(`O valor em R$ é ${soma(0.1, 0.2).toFixed(2).toString().replace('.', ',')}`)
