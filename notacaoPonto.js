//notacao . para acessar a funcao definida dentro do objeto console
console.log(typeof console) //object

console.log(Math.ceil(6.1)) //7 - arredonda pra cima, math é object dentro de js

const objeto1 = {}
objeto1.nome = 'Bola' //usando . para criar atributo dentro do objeto, msm nao estando criado nada.
//objeto1[nome] = 'Bola2' //igual de cima, escrito de outra forma.
console.log(objeto1.nome) //Bola


//********>>>>>>>>>>exemplo */
function Obj(nome) {
    this.nome = nome                // atribui a this.nome e ele ficara visivel para quem istanciar um objeto do tipo Obj, ou seja, fica publico. 
    this.exec = function(){
        console.log('Exec...')      //Podemos criar atributos e tmb funcoes que serao expostas para fora da function quando for instaciada 
    }                   
}                    
//se usasse var ficaria dentro do escopo da function nao visivel fora, como foi usado this ficou visivel pra fora

const obj2 = new Obj('cadeira') 
const obj3 = new Obj('mesa') 

console.log(obj2.nome) //cadeira
console.log(obj3.nome) //mesa

obj3.exec() // Exec...



//THIS - sempre o obj q esta sendo referenciado naquele contexto de execucao.s
document.getElementsByTagName('body')[0].onclick = f1 //false - toque na tela
// mesmo que passe a tag q só tem 1 elemento (dentro da pagina tem apenas um 1 unico body), retorna um array e vc pega o indice 0
//1 array de uma determinada pagina 

//o this varia de acordo com a forma como vc chama a funcao
//quando temos uma funcao tradicional o this pode variar, tendo q entender o contexto apresentado
//Se for uma arrow function o this nao varia nunca, sempre true
const f3 = () => console.log(this === window) //undefined
document.getElementsByTagName('body')[0].onclick = f3 //true
f3() //true



function f2 { console.log(this === document) } //undefined - no contexto global this nao aponta pra document
f2() - false
document.getElementsByTagName('body')[0].onclick = f2 //false - nao aponta para document



const body = document.getElementsByTagName('body')[0]
function f2() { console.log(this === body) } //undefined
document.getElementsByTagName('body')[0].onclick = f2 //true - de fato qm representa o this é o proprio elemento q estou clicando

f2() //false.


const pessoa = {
    saudacao: 'Bom Dia!',
    falar() {
        console.log(this.saudacao)  //estou acessando o objeto no qual é o dono dessa funcao, no caso é o objeto pessoa, estou acessando um atributo do obj usando this
    }
}


pessoa.falar() //Bom Dia!
falar() //undefined - saudacao apontou para um this diferente q nao é mais o objto pessoa e esse objto q esta sendo apontado a partir da chamada dessa funcao nao tem saudacao dentro dele e o resultado deu undefined
//conflito entre programacao funcional e Orientada a objetos.

const falarDePessoa = pessoa.falar.bind(pessoa) //o this vai ser a const pessoa definida na linha 58
falarDePessoa()//Bom Dia!!
//passa um objeto no qual onde vc qr q seja resolvido o this 
//o bind amarra um determinado objto para ser o dono da execucao do objeto sempre q ele for chamado, ou seja, 
//sempre que chamar falarDePessoa e sempre q referencia o this ele será o objto q foi passado para bind 

//fazendo um novo Teste
const falar2 = pessoa.falar //nao é alterado a partir da chamado de bind(l.70), apenas o resultado dela q foi armazenado na variavel falarDePessoa 
falar2() //undefined 



//>>>******** setInterval
 function Pessoa() {
    this.idade = 0

    setInterval(function() {  //dispara uma outra funcao a partir de um determinado intervalo q vc passou, podendo passar uma funcao como parametro para outra function, ou dentro dos parametros dessa funcao passar uma funcao anonima, literal.
        this.idade++
        console.log(this.idade)
    }, 1000) //a cada x milessegundos essa funcao vai ficar sendo disparada 1000ml = 1 seg., ou seja a cada 1 seg. a funcao q foi passada ao setInterval vai ser disparada.
 }
 
 new Pessoad() //NAN NAN NAN NAN NAN NAN... -  apenas chamando, instanciando a funcao
 //o this varia de acordo com qm invoca a funcao, no caso acima a funcao nao foi invocada - (), qm invoca e dispara ela é o setinterval
 //nesse caso acima o this.idade nao aponta para o objto pessoa, pq qm dispara a chamada da funcao é o temporizador, nao o obj pessoa.
 

//****para resolver o problema colocamos no final da funcao o .bind
function Pessoa() {
    this.idade = 0

    setInterval(function() {  
        console.log(this.idade)
    }.bind(this), 1000)  //ele amarra o this do objto a chamada dessa funcao
}
 new Pessoa() //123456.... cada segundo a idade da pessoa vai sendo v


 //this com arrow function
 function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    })
 }

 new Pessoa //1 2 3 4 5 6 7... incrementa a idade






