// Exemplo: Leia N números e informe:
// - A quantidade de números pares e impares (CONTADOR)
// - A soma dos números pares e dos impares (ACUMULADOR)
// - O maior número par e o maior número impar (COMPARADOR)

let N = Number(prompt("Informe a quantidade de números: "));

let contadorPares = 0, contadorImpares = 0;
let somaPares = 0, somaImpares = 0;
let maiorNumeroPar, maiorNumeroImpar;

for (contador = 0; contador < N; contador++) {
    let numero = Number(prompt(`Digite o ${contador + 1}° número: `));

    if (numero % 2 == 0) {
        contadorPares++;
        somaPares = somaPares + numero;

        if (!maiorNumeroPar) {
            maiorNumeroPar = numero;
        }

        if (numero > maiorNumeroPar) {
            maiorNumeroPar = numero;
        }

    } else {
        contadorImpares++;
        somaImpares = somaImpares + numero;

        if (!maiorNumeroImpar) {
            maiorNumeroImpar = numero;
        }

        if (numero > maiorNumeroImpar) {
            maiorNumeroImpar = numero;
        }
    }
}

console.log("-------- CONTADOR --------")
console.log(`Quantidade de Pares: ${contadorPares}`);
console.log(`Quantidade de Impares: ${contadorImpares}`);
console.log("--------------------------")

console.log("-------- ACUMULADOR --------")
console.log(`Soma dos Números Pares: ${somaPares}`);
console.log(`Soma dos números Impares: ${somaImpares}`);
console.log("--------------------------")

console.log("-------- COMPARADOR --------")
console.log(`Maior Número Par: ${maiorNumeroPar}`);
console.log(`Maior Número Impar: ${maiorNumeroImpar}`);
console.log("----------------------------")