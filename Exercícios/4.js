// Exercício 4 - Estoque Simples
let estoque;
let quantidade;
let quantidaderemovida;

estoque = Number(prompt("Informe a quantidade em estoque: "));
quantidade = Number(prompt("Informe a quantidade que deseja remover: "));

quantidaderemovida = estoque - quantidade;

console.log("A quantidade em estoque é " + quantidaderemovida);

quantidade > estoque
    ? alert("Operação inválida: quantidade insuficiente no estoque")
    : alert("Estoque Atualizado: " + quantidaderemovida);