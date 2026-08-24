let nota = Number(prompt("Informe sua nota: "));
let faltas = Number(prompt("Informe as suas faltas: "));

if (!nota || !faltas){
    console.log("Você precisa informar a sua nota e as faltas.");
} else {
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
}