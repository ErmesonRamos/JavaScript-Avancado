/*
    SINTAXE
(
    function() {

}
)(Chamada da função);
*/
//Ele é uma função anonima que se auto invoca
const resultado = (function() {
    const meuNome = "Ermeson Ramos de Lima";
    console.log(meuNome);
    return meuNome;
}
)();

console.log(resultado);





