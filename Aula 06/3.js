function ClassificaAluno(media, faltas) {

if (faltas >= 0 && faltas < 10) {
    if (media >= 9.5) {
        console.log("Aprovado com Louvor!");
    } else if (media >= 7) {
        console.log("Aprovado!");
    } else {
        console.log("Reprovado por Faltas!");
    }
}
}

ClassificaAluno(9, 5);