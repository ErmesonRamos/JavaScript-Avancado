//this === window ele global
const obj = {
    thisLocal: function() {
        const thisLocal = (() => console.log(this))()
        console.log(thisLocal);
    }
    
}
console.log(obj.thisLocal())


//Para que serve as arrow functions -> São expressões de função com sintaxe mais curta, além delas serão funções anonimas o this dela liga ao escopo.

//função anonimas (Expressão de função)
const minhaF = function() {
    console.log("Alguma coisa");
};

//Declaração de função
/*function minhaF() {
    console.log("Alguma coisa");
}*/

//arrow functions são expressão de função o retorno é automatico
const funcao = () => "Uma expressão de função";
console.log(funcao());

//Aprender depois: Call, apply e bind



