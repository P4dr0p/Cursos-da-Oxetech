// Exercício 3 - Entrada no Evento
let idade = Number(prompt("Informe sua idade: "));

let permissao = idade >= 18 ? true : false;

console.log(permissao);

permissao
    ? alert("Entrada permitida!")
    : alert("Entrada negada!");