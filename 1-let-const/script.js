//var -> Escopo global pode ser acessada por qualquer parte do codígo.
var minhaVar = "Ermeson";
console.log(minhaVar);


//let -> Escopo local, não pode ser acessada fora do bloco de codígo.
if(true) {
    var exposta = "exposta";
    let naoExposta = "naoExposta";
};
console.log(exposta);
//console.log(naoExposta);

for(let c = 0; c <= 10; c++) {
    var  j = c;
}

console.log(j);

//A diferença entre let e const -> let o valor pode ser modificado com os codígo e o const o valor não podera ser alterado

//let
let variavel = 10;
variavel = 20;
console.log(variavel);
//const
const variavel1 = 10;
variavel = 20;
console.log(variavel1);

//manipulação de let e const
let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

let arr1 = [1, 2, 3];
arr1.push(4);
console.log(arr1);
arr1.pop();
console.log(arr1);

const obj = {
    a: 1,
    b: 2
};

obj.c = 3;
console.log(obj);

delete obj.c;
console.log(obj);