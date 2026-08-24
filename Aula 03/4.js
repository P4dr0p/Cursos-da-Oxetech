let nota = 10;
let faltas = -15;

if (faltas >= 0 && faltas < 10) {
    if ((nota >= 9 && nota <= 10)) {
    console.log("Aprovado com Louvor!");
    } else if ((nota >= 7 && nota < 9)) {
    console.log("Aprovado!");
    } else if ((nota >= 4 && nota < 7)) {
    console.log("Recuperação");
    } else if ((nota >= 0 && nota < 4)) {
    console.log("Reprovado! (Nota)");
    } else {
        console.log("Nota Inválida!");
    }
} else if (faltas >= 10) {
    console.log("Reprovado! (Falta)");
} else {
    console.log("Número de Faltas Inválido!")
}