//bind - Cria uma nova função que, quando chamada, tem sua palavra chave 'this' definida com o valor fornecido, com uma sequência determinada de argumentos precedendo quaisquer outros que sejam fornecidos quando uma função é chamada.

//'use strict' -> Da reestrições ao nosso codígo e this = underfined.
function thisBindExemplo() {
    console.log(this);
};

const obj = {exemplo: "exemplo"};
obj.nome = "Ermeson";

thisBindExemplo = thisBindExemplo.bind(obj);

thisBindExemplo();

//Nota: call() a apply() tem uma sintaxe idêntica. A diferença é que o call() aceita uma lista de argumentos, enquanto apply() aceita um array de argumentos.

//call
//O metodo call() chama uma função com um dado 'this' e argumentos passados individualmente.
//O call() permite que função/método, pertencente a um dado objeto,seja atribuido e chamado por um objeto diferente. Dessa forma podendo reutilizar o metodo de um objeto em diversos outros objetos.


const obj1 = {exemplo1: "Exemplo1", mostraThis: function() {
    console.log(this);
} };

obj1.mostraThis();

const obj2 = {exemplo2: "Exemplo2"};

obj1.mostraThis.call(obj2);


//apply
//O método apply() chama uma função com um dado valor this, e argumentos passados como uma array (ou um objeto array-like).
//Em outras palavras é um call que aceita argumentos por meio de array ao inves de serem passados individualmente (um a um).

const obj3 = {exemplo1: "Exemplo1", mostraThis: function thisCallExemplo() {
    console.log(this);
}}

obj3.mostraThis();

const obj4 = {exemplo2: "Exemplo2"};







