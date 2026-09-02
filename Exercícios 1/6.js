// Exercício 6 - IMC
let nome;
let peso;
let altura;
let imc;
let confirmacao;

nome = prompt("Informe seu nome: ");
peso = Number(prompt("Informe seu peso (kg): "));
altura = Number(prompt("Informe sua altura (m): "));

imc = peso / (altura * altura);

confirmacao = confirm(
    "Seus Dados:\n" +
    "Nome: " + nome + "\n" +
    "Peso: " + peso + " kg\n" +
    "Altura: " + altura + " m\n\n" +
    "Deseja continuar?"
);

confirmacao
    ? alert(nome + ", seu IMC é " + imc.toFixed(2))
    : alert("Você saiu do programa.");