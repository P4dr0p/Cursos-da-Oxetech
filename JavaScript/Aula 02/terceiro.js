let n1, n2, soma;

n1 = Number(prompt("Digite o 1° número: "));
n2 = Number(prompt("Digite o 2° número: "));

soma = n1 + n2;

console.log("A soma dos números é " + soma);

// Concatenação
let nome = "Lucas";
let sobrenome = "da Silva";

let mensagem = "Olá, " + nome + sobrenome + "Seja Bem-Vindo(a)!";
let mensagem = `Olá, ${nome} ${sobrenome} seja bem vindo(a)!`;