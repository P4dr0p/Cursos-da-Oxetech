// Exercício 2 - Desconto Progressivo
let valor;
let desconto;

valor = Number(prompt("Informe o valor de compra: "));
desconto = valor >= 100 ? 0.10 : 0.05;

let valorFinal = valor - (valor * desconto);

console.log("Valor da compra: R$ " + valor.toFixed(2));
console.log("Desconto aplicado: " + (desconto * 100) + "%");
console.log("Valor final a pagar: R$ " + valorFinal.toFixed(2));