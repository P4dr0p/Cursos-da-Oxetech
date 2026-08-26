// Contador

let N = Number(prompt("Informe a quantidade de números: "));

// Contar a quantidade de número pares e impares que foram digitados.
let contadorPares = 0, contadorImpares = 0;

for (let contador = 0; contador < N; contador ++) {
    let numero = Number(prompt(`Digite o ${contador + 1}° número: `));
    
    if (numero % 2 == 0) {
        contadorPares++;
    } else {
        contadorImpares++;
    }
}

console.log(`Dos ${N} números digitados ${contadorPares} são pares e ${contadorImpares} são impares.`)