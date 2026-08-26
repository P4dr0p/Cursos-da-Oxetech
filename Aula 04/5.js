// Diferenças

// ---------------------------------- //

// FOR: Você vai usar o For quando souber exatamente a quantidade de vezes que o laço vai ser executado.

// Exemplo: Imprima "Hello World" N vezes, onde N é um valor um informado pelo usuário.

let N = Number(prompt("Informe número de impressões: "));

for (let contador = 0; contador < N; contador++) {
    console.log("Hello World")
}

// ---------------------------------- //

// WHILE: Você vai usar o while quando não souber a quantidade exata de vezes que o laço vai ser executado, mas conhece um condição de execução ou parada.

// Exemplo: Peça para o usuário digitar números ate que o número digitado seja -1.

while (true) {
    let numero = Number(prompt("Digite um número: "));

    if (numero == -1) {
        break;
    }
}

// ---------------------------------- //
// Do-While: Você vai usar o do-while quando quer garantir que o laço seja executado ao menos;