// COMPARADOR

// Exemplo: Leia N números e ao final informe o maior número digitado.

// Entrada: 5 7 9 1 0 3 6 

// Saída: O maior número digitado foi o 9.

// Condição: numero > maiorNumero

// Solução: Garantir que o primeiro número seja o maior inicialmente,

    let N = Number(prompt("Informe a quantidade de números: "));

    let maiorNumero = 0;

    for (let contador = 0; contador < N; contador++) {
        let numero = Number(prompt(`Digite o ${contador + 1}° número: `));

        if (contador == 0) {
            maiorNumero - numero;
        }

        // maiorNumero = 1
        // numero = 5
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    }

    console.log(`O maior número digitado foi ${maiorNumero}.`);