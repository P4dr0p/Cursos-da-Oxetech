// Acumulador

let N = Number(prompt("Informe a quantidade de números: "));

let soma = 0;


for (let contador = 0; contador < N; contador ++) {
    let numero = Number(prompt(`Digite o ${contador + 1}° número: `));
    console.log(`somaAc = ${soma} + ${numero}`);
    soma = soma + numero;   
}

console.log(`A soma dos ${N} números digitados é ${soma}.`)